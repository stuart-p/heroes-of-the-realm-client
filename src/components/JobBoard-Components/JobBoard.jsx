import React from "react";
import { ParaText } from "../styles/text.style";
import { observer } from "mobx-react";
import { auth } from "../../stores/auth";
import { Redirect, Link, Router } from "@reach/router";
import { getJobs } from "../../api/jobBoard.api";
import JobDetails from "./JobDetails";
import JobCard from "./JobCard";
import {
  QuestListContainter,
  ActiveQuestsList
} from "../styles/Containers.style";

const JobBoard = observer(
  class JobBoard extends React.Component {
    state = {
      quests: []
    };

    componentDidMount = () => {
      getJobs().then(({ quests }) => {
        this.setState({ quests });
      });
    };

    render() {
      console.log(this.state.quests);
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
              {this.state.quests.map(quest => {
                return <JobCard {...quest} key={quest.id} />;
              })}
            </ActiveQuestsList>
          </QuestListContainter>
          <Router>
            <JobDetails path=":id" />
          </Router>
        </>
      ) : (
        <Redirect noThrow to="/" />
      );
    }
  }
);

export default JobBoard;
