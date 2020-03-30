import React from "react";
import { ParaText } from "../styles/text.style";
import { observer } from "mobx-react";
import { auth } from "../../stores/auth";
import { Redirect, Link } from "@reach/router";
import { getJobs } from "../../api/jobBoard.api";

const JobBoard = observer(
  class JobBoard extends React.Component {
    state = {
      jobList: {}
    };

    componentDidMount = () => {
      getJobs().then(jobList => {
        this.setState({ jobList });
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
          <ul>
            {Object.keys(this.state.jobList).map(jobID => {
              return (
                <li key={jobID}>
                  <h3>{this.state.jobList[jobID].title}</h3>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <Redirect noThrow to="/" />
      );
    }
  }
);

export default JobBoard;
