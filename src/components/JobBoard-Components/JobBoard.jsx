import React from "react";
import { ParaText, SubHeading, LineBreak } from "../styles/text.style";
import { observer } from "mobx-react";
import { auth, timeStamp } from "../../stores/auth";
import { setLoad } from "../../stores/load";
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
  ExplainerContainer,
  ArticleElement,
  ElementTopStripe,
} from "../styles/Containers.style";
import { formatErrorMessage } from "../../utils/formatting.utils";
import { toast } from "react-toastify";
import { OnRouteChange } from "../LandingPage-components/RouteChange";

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
          let completionTime = Date.parse(quest.completed + "+00:00");
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
      this.setState(
        (currentState) => {
          const updatedQuestsWithBegin = currentState.quests.map((quest) => {
            if (quest.id === id) {
              quest.isInProgress = true;
            }
            return quest;
          });
          return { quests: updatedQuestsWithBegin };
        },
        () => {
          getJobs().then(({ quests }) => {
            this.setState({ quests });
          });
        }
      );
    };

    optimisticallyCompleteJob = (id) => {
      this.setState(
        (currentState) => {
          const updatedQuestsWithComplete = currentState.quests.map((quest) => {
            if (quest.id === id) {
              quest.isInProgress = false;
              quest.isComplete = true;
            }
            return quest;
          });
          return { quests: updatedQuestsWithComplete };
        },
        () => {
          requestQuestCompletion(id);
        }
      );
    };

    componentDidMount = () => {
      setLoad(true);
      getJobs()
        .then(({ quests }) => {
          setLoad(false);
          this.checkForCompletedQuestsAndPrune(quests);
          // this.setState({ quests });
        })
        .catch((err) => {
          const errorMsg = formatErrorMessage(err);
          setLoad(false);
          toast.error(`Error. ${errorMsg}`);
        });
    };

    componentDidUpdate = (prevProps, prevState) => {
      if (this.state.quests.length !== prevState.quests.length) {
        this.checkForCompletedQuestsAndPrune(this.state.quests);
      }
    };

    cardDetailsChanged = () => {
      this.forceUpdate();
    };

    render() {
      return auth.loggedIn ? (
        <>
          <ExplainerContainer>
            <article>
              <SubHeading decorative> Quest List</SubHeading>
              <LineBreak />
              <ArticleElement>
                <ElementTopStripe />
                <div className="onTop">
                  <SubHeading color={"white"}>Greetings, hero!</SubHeading>
                  <ParaText>
                    Welcome to your local Adventurer's Guild job board! Complete
                    quests and you will receive an increase to your official
                    Adventurer's Guild level ranking.
                  </ParaText>
                </div>
              </ArticleElement>
            </article>
          </ExplainerContainer>
          <QuestListContainter>
            <ActiveQuestsList>
              {this.state.quests.map((quest) => {
                return (
                  <JobCard
                    {...quest}
                    key={quest.id}
                    updateJobBoardOnceComplete={this.optimisticallyCompleteJob}
                  />
                );
              })}
            </ActiveQuestsList>
          </QuestListContainter>
          <Router>
            <JobDetails
              path=":id"
              updateJobBoardOnceBegun={this.optimisticallyUpdateJobDetails}
            />
          </Router>
          <OnRouteChange
            action={() => {
              window.scrollTo(0, 0);
            }}
          />
        </>
      ) : (
        <Redirect noThrow to="/" />
      );
    }
  }
);

export default JobBoard;
