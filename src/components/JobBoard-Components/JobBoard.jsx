import React from "react";
import { ParaText } from "../styles/text.style";
import { observer } from "mobx-react";
import { auth, timeStamp } from "../../stores/auth";
import { Redirect, Router } from "@reach/router";
import {
  getJobs,
  requestQuestCompletion,
  requestCreateNewQuest,
} from "../../api/jobBoard.api";
import JobDetails from "./JobDetails";
import JobCard from "./JobCard";
import {
  QuestListContainter,
  ActiveQuestsList,
} from "../styles/Containers.style";
import { formatErrorMessage } from "../../utils/formatting.utils";
import { toast } from "react-toastify";

const JobBoard = observer(
  class JobBoard extends React.Component {
    state = {
      quests: [],
    };

    checkForCompletedQuestsAndPrune = (quests) => {
      let requiredNewQuests = 6 - quests.length;
      const requestsForCompletions = [];
      quests.forEach((quest) => {
        if (quest.completed !== null) {
          let completionTime = Date.parse(quest.completed);
          completionTime += timeStamp.timeDeltaSeconds * 1000;
          if (completionTime - Date.now() < 0) {
            requiredNewQuests = Math.min(6, requiredNewQuests++);
            requestsForCompletions.push(requestQuestCompletion(quest.id));
          }
        }
      });
      Promise.all(requestsForCompletions)
        .then(() => {
          const requestsForNewQuests = [];
          for (let i = 0; i < requiredNewQuests; i++) {
            requestsForNewQuests.push(requestCreateNewQuest());
          }
          return Promise.all(requestsForNewQuests);
        })
        .then(() => {
          return getJobs();
        })
        .then(({ quests }) => {
          this.setState({ quests });
        });
    };

    optimisticallyUpdateJobDetails = (id) => {
      this.setState((currentState) => {
        const updatedQuestsWithBegin = currentState.quests.map((quest) => {
          if (quest.id === id) {
            quest.isInProgress = true;
            return quest;
          } else return quest;
        });
        return { quests: updatedQuestsWithBegin };
      });
    };

    componentDidMount = () => {
      getJobs()
        .then(({ quests }) => {
          this.checkForCompletedQuestsAndPrune(quests);
          // this.setState({ quests });
        })
        .catch((err) => {
          const errorMsg = formatErrorMessage(err);
          toast.error(`Error. ${errorMsg}`);
        });
    };

    render() {
      return auth.loggedIn ? (
        <>
          <div>
            <ParaText>
              Welcome to your local Adventurer's Guild job board! Complete
              quests and you will receive an increase to your official
              Adventurer's Guild level ranking.
            </ParaText>
          </div>
          <QuestListContainter>
            <ActiveQuestsList>
              {this.state.quests.map((quest) => {
                return <JobCard {...quest} key={quest.id} />;
              })}
            </ActiveQuestsList>
          </QuestListContainter>
          <Router>
            <JobDetails
              path=":id"
              updateJobBoardOnceBegun={this.optimisticallyUpdateJobDetails}
            />
          </Router>
        </>
      ) : (
        <Redirect noThrow to="/" />
      );
    }
  }
);

export default JobBoard;
