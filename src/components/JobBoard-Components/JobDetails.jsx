import React from "react";
import {
  AdventurerDetailPane,
  FrostedContainer,
  AdventureDetailedCard,
} from "../styles/Containers.style";
import { StyledLink, ParaText } from "../styles/text.style";
import { Button } from "../styles/UI.style";
import { getJob, beginJob } from "../../api/jobBoard.api";
import { formatDurationString } from "../../utils/formatting.utils";
import theme from "../styles/themes";

class JobDetails extends React.Component {
  state = {
    quest: {},
  };

  componentDidMount = () => {
    getJob(this.props.id).then(({ quest }) => {
      this.setState({ quest });
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.quest.isInProgress !== this.state.quest.isInProgress) {
      console.log("change in job state");
    }
  };

  clickBeginQuest = (event) => {
    beginJob(this.props.id)
      .then(() => {
        return getJob(this.props.id);
      })
      .then(({ quest }) => {
        this.setState({ quest });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <AdventurerDetailPane>
        <StyledLink to="../">
          <FrostedContainer />
        </StyledLink>
        <AdventureDetailedCard altBG={this.state.quest.isInProgress && theme.c}>
          <StyledLink to="../">
            <ParaText>Back</ParaText>
          </StyledLink>
          <h2>Quest detail page</h2>
          <h4>{this.state.quest.title}</h4>
          <h4>{this.state.quest.experience} XP</h4>
          <h4>{formatDurationString(this.state.quest.duration)}</h4>
          {!this.state.quest.isComplete && !this.state.quest.isInProgress && (
            <Button onClick={this.clickBeginQuest}>begin quest!</Button>
          )}
          {this.state.quest.isInProgress && <p>in progress!</p>}
          {this.state.quest.isInProgress && (
            <p>{this.state.quest.assignedUser} on quest</p>
          )}
        </AdventureDetailedCard>
      </AdventurerDetailPane>
    );
  }
}

export default JobDetails;
