import React from "react";
import { getAdventurer } from "../../api/adventurers.api";
import {
  formatCharClass,
  formatErrorMessage,
} from "../../utils/formatting.utils";
import { OnRouteChange } from "../LandingPage-components/RouteChange";
import {
  AdventurerDetailPane,
  FrostedContainer,
  AdventureDetailedCard,
  ExplainerContainer,
  ArticleElement,
  ElementTopStripe,
  AdventurerDetailInfoContainer,
} from "../styles/Containers.style";
import {
  StyledLink,
  ParaText,
  SubHeading,
  SectionHeading,
  KeyText,
  LineBreak,
} from "../styles/text.style";
import { Button, ListOfLinks } from "../styles/UI.style";
import { toast } from "react-toastify";
import theme from "../styles/themes";
import { Router, Link } from "@reach/router";
import JobDetails from "../JobBoard-Components/JobDetails";

class AdventurerDetailPage extends React.Component {
  state = {
    adventurer: { quests: [] },
  };
  componentDidMount = () => {
    getAdventurer(this.props.id)
      .then(({ adventurer }) => {
        this.setState({ adventurer });
      })
      .catch((err) => {
        const msg = formatErrorMessage(err);
        toast.error(`Error. ${msg}`);
      });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.id !== prevProps.id) {
      getAdventurer(this.props.id)
        .then(({ adventurer }) => {
          this.setState({ adventurer });
        })
        .catch((err) => {
          const msg = formatErrorMessage(err);
          toast.error(`Error. ${msg}`);
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
            <Button altBG>Back</Button>
          </StyledLink>
          <AdventurerDetailInfoContainer>
            <figure>
              <img src={this.state.adventurer.photoURL} alt="portrait" />
            </figure>
            <ArticleElement adventurerDetails>
              <ElementTopStripe />
              <div className="onTop">
                <SubHeading color={"white"}>
                  {this.state.adventurer.knownAs}
                </SubHeading>
                <SubHeading>
                  {formatCharClass(this.state.adventurer.charClass)}
                </SubHeading>
                <KeyText>
                  Level {this.state.adventurer.level},{" "}
                  {this.state.adventurer.experience} experience points
                </KeyText>
                <LineBreak col={theme.c} />
                <ListOfLinks>
                  {this.state.adventurer.quests.map((quest) => {
                    return (
                      <li key={quest.id}>
                        <Link to={`${quest.id}`}>
                          <ParaText>{quest.title}</ParaText>
                        </Link>
                      </li>
                    );
                  })}
                </ListOfLinks>
              </div>
            </ArticleElement>
          </AdventurerDetailInfoContainer>
        </AdventureDetailedCard>
        <Router>
          <JobDetails path=":id" />
        </Router>
        <OnRouteChange
          action={() => {
            {
              window.scrollTo(0, 0);
            }
          }}
        />
      </AdventurerDetailPane>
    );
  }
}

export default AdventurerDetailPage;
