import React from "react";
import { getAdventurer } from "../../api/adventurers.api";
import { formatCharClass } from "../../utils/formatting.utils";
import {
  AdventurerDetailPane,
  FrostedContainer,
  AdventureDetailedCard,
} from "../styles/Containers.style";
import { StyledLink, ParaText } from "../styles/text.style";

class AdventurerDetailPage extends React.Component {
  state = {
    adventurer: {},
  };
  componentDidMount = () => {
    getAdventurer(this.props.id).then(({ adventurer }) => {
      this.setState({ adventurer });
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.id !== prevProps.id) {
      getAdventurer(this.props.id).then(({ adventurer }) => {
        this.setState({ adventurer });
      });
    }
  };
  render() {
    return (
      <AdventurerDetailPane>
        <StyledLink to="../">
          <FrostedContainer />
        </StyledLink>
        <AdventureDetailedCard>
          <StyledLink to="../">
            <ParaText>Back</ParaText>
          </StyledLink>
          <h2>adventurer detail page</h2>
          <h4>{this.state.adventurer.knownAs}</h4>
          <img src={this.state.adventurer.photoURL} />
          <h4>{formatCharClass(this.state.adventurer.charClass)}</h4>
          <h4>Level {this.state.adventurer.level}</h4>
          <h4> {this.state.adventurer.experience} experience</h4>
          <ul>
            {this.state.adventurer.quests.map((quest) => {
              return (
                <li key={quest.id}>
                  <p>{quest.title}</p>
                </li>
              );
            })}
          </ul>
        </AdventureDetailedCard>
      </AdventurerDetailPane>
    );
  }
}

export default AdventurerDetailPage;
