import React from "react";
import { StyledLink, SectionHeading, KeyText } from "../styles/text.style";
import { formatDurationString } from "../../utils/formatting.utils";
import {
  QuestCardListItem,
  FrostedContainer,
} from "../styles/Containers.style";

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

class JobCard extends React.Component {
  state = {
    image: null,
  };

  componentDidMount = () => {
    this.setState({
      image: `https://picsum.photos/id/${
        rndImgNos[Math.floor(Math.random() * rndImgNos.length)]
      }/400/300`,
    });
  };
  render() {
    const { title, experience, duration, isInProgress, id } = this.props;
    return (
      <QuestCardListItem isInProgress={isInProgress}>
        <StyledLink to={`${id}`}>
          <div className="questDetailsContainer">
            <SectionHeading color={"white"}>
              {title}
              <FrostedContainer />
            </SectionHeading>
            {!isInProgress && (
              <KeyText color={"white"}>
                {experience} XP <FrostedContainer />
              </KeyText>
            )}
            {!isInProgress && (
              <KeyText color={"white"}>
                {formatDurationString(duration)} <FrostedContainer />
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

export default JobCard;
