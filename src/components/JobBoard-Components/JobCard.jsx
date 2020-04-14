import React from "react";
import {
  StyledLink,
  SectionHeading,
  KeyText,
  DecorativePara,
} from "../styles/text.style";
import { formatDurationString } from "../../utils/formatting.utils";
import {
  QuestCardListItem,
  FrostedContainer,
} from "../styles/Containers.style";
import ProgressBar from "../UI-components/ProgressBar";
import { observer } from "mobx-react";
import theme from "../styles/themes";

const rndImgNos = [
  10,
  1002,
  1015,
  1016,
  1018,
  1019,
  1020,
  1021,
  1022,
  1024,
  1028,
  1032,
  1036,
  1037,
  1039,
  1040,
  1043,
  1045,
  1049,
  1050,
  1053,
  1064,
  142,
  168,
];
const JobCard = observer(
  class JobCard extends React.Component {
    state = {
      image: null,
      timeRemaining: 0,
    };

    calcProgress = () => {
      const { duration, started } = this.props;
      const timeStarted = Date.parse(started);
      const timeSpent = (Date.now() - timeStarted) / 1000 || 0;
      const percentage = Math.floor((timeSpent / duration) * 100, 100);
      const timeRemaining = Math.round(duration - timeSpent);
      return { percentage, timeRemaining };
    };

    startTimer = () => {
      this.interval = setInterval(() => {
        const timeRemaining = this.calcProgress().timeRemaining;
        this.setState({ timeRemaining });
        if (timeRemaining <= 0) {
          this.props.updateJobBoardOnceComplete(this.props.id);
          clearInterval(this.interval);
        }
      }, 1000);
    };
    componentDidMount = () => {
      this.startTimer();
      this.setState({
        image: `https://picsum.photos/id/${
          rndImgNos[Math.floor(Math.random() * rndImgNos.length)]
        }/400/300`,
      });
    };
    componentWillUnmount = () => {
      if (this.interval) {
        clearInterval(this.interval);
      }
    };
    render() {
      const {
        title,
        experience,
        duration,
        isInProgress,
        id,
        isComplete,
      } = this.props;
      return (
        <QuestCardListItem isInProgress={isInProgress} isComplete={isComplete}>
          <StyledLink to={`${id}`}>
            <div className="questDetailsContainer">
              <SectionHeading color={"white"}>
                {title}
                <FrostedContainer />
              </SectionHeading>
              {!isInProgress && !isComplete && (
                <KeyText color={"white"}>
                  {experience} XP <FrostedContainer />
                </KeyText>
              )}
              {!isInProgress && !isComplete && (
                <KeyText color={"white"}>
                  {formatDurationString(duration)} <FrostedContainer />
                </KeyText>
              )}
              {isInProgress && (
                <>
                  <KeyText color={"white"}>
                    {formatDurationString(this.state.timeRemaining)} remaining
                  </KeyText>
                  <ProgressBar
                    percentage={
                      100 - (this.state.timeRemaining / duration) * 100
                    }
                    timeRemaining={this.calcProgress().timeRemaining}
                    className="progressBar"
                  />
                </>
              )}
              {isComplete && (
                <KeyText color={theme.d}>
                  COMPLETED
                  <FrostedContainer />
                </KeyText>
              )}

              <figure>
                <img src={this.state.image} alt="quest graphic" />
              </figure>
            </div>
          </StyledLink>
        </QuestCardListItem>
      );
    }
  }
);

export default JobCard;
