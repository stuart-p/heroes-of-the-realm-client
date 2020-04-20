import React from "react";
import {
  AdventurerDetailPane,
  FrostedContainer,
  AdventureDetailedCard,
  QuestDetiledBanner,
} from "../styles/Containers.style";
import {
  StyledLink,
  ParaText,
  SubHeading,
  KeyText,
} from "../styles/text.style";
import { Button } from "../styles/UI.style";
import { getJob, beginJob } from "../../api/jobBoard.api";
import {
  formatDurationString,
  formatErrorMessage,
} from "../../utils/formatting.utils";
import theme from "../styles/themes";
import { toast } from "react-toastify";

class JobDetails extends React.Component {
  state = {
    quest: {},
  };

  componentDidMount = () => {
    getJob(this.props.id)
      .then(({ quest }) => {
        this.setState({ quest });
      })
      .catch((err) => {
        const errorMsg = formatErrorMessage(err);
        toast.error(`Error. ${errorMsg}`);
      });
  };

  clickBeginQuest = (event) => {
    beginJob(this.props.id)
      .then(() => {
        return getJob(this.props.id);
      })
      .then(({ quest }) => {
        this.props.updateJobBoardOnceBegun(quest.id);
        this.setState({ quest });
        toast.success("Quest has begun!");
      })
      .catch((err) => {
        const errorMsg = formatErrorMessage(err);
        toast.error(`Error. ${errorMsg}`);
      });
  };

  render() {
    return (
      <AdventurerDetailPane>
        <StyledLink to="../">
          <FrostedContainer />
        </StyledLink>
        <AdventureDetailedCard altBG={"white"}>
          <QuestDetiledBanner
            bg={
              this.state.quest.isComplete
                ? "black"
                : this.state.quest.isInProgress
                ? theme.d
                : theme.c
            }
          >
            <KeyText color={"white"}>
              Status:{" "}
              {this.state.quest.isComplete
                ? "Completed"
                : this.state.quest.isInProgress
                ? "In Progress"
                : "Available"}
            </KeyText>
            <StyledLink to="../">
              <Button>Back</Button>
            </StyledLink>
          </QuestDetiledBanner>
          <SubHeading>{this.state.quest.title}</SubHeading>
          <KeyText>
            {this.state.quest.experience} experience points, <br />
            {formatDurationString(this.state.quest.duration)} to complete
          </KeyText>
          {!this.state.quest.isComplete && !this.state.quest.isInProgress && (
            <Button onClick={this.clickBeginQuest}>begin quest!</Button>
          )}
          {this.state.quest.isInProgress && (
            <ParaText>
              in progress! {this.state.quest.assignedUser} on quest.
            </ParaText>
          )}
          {this.state.quest.isComplete && (
            <ParaText>
              Quest Completed by {this.state.quest.assignedUser}, <br />
              on{" "}
              {new Date(Date.parse(this.state.quest.completed)).toDateString()}.
            </ParaText>
          )}
        </AdventureDetailedCard>
      </AdventurerDetailPane>
    );
  }
}

export default JobDetails;
