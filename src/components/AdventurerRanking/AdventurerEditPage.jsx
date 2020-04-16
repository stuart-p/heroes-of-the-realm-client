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
import { auth } from "../../stores/auth";

const AdventurerEditPage = observer(
  class AdventurerEditPage extends React.Component {
    state = {
      adventurer: { quests: [] },
      currentAvatar: 1,
      currentClass: 1,
      currentName: "",
      hasChanged: false,
    };

    hasChanged = () => {
      if (
        this.state.currentAvatar !== this.state.adventurer.photoURL ||
        this.state.currentClass !== this.state.adventurer.charClass ||
        this.state.currentName !== this.state.adventurer.knownAs
      ) {
        this.setState({ hasChanged: true });
      } else {
        this.setState({ hasChanged: false });
      }
    };

    setToClean = () => {
      getAdventurer(auth.userID)
        .then(({ adventurer }) => {
          this.setState({
            adventurer,
            currentAvatar: adventurer.photoURL,
            currentClass: adventurer.charClass,
            currentName: adventurer.knownAs,
            hasChanged: false,
          });
        })
        .catch((err) => {
          const msg = formatErrorMessage(err);
          toast.error(`Error. ${msg}`);
        });
    };

    componentDidMount = () => {
      this.setToClean();
    };

    render() {
      return (
        <AdventurerDetailPane>
          <StyledLink to="../">
            <FrostedContainer />
          </StyledLink>
          <AdventureDetailedCard>
            <QuestDetiledBanner>
              <StyledLink to="../">
                <Button altBG>Back</Button>
              </StyledLink>
              <SubHeading color={"white"}>Edit Your Profile</SubHeading>
            </QuestDetiledBanner>
            <AdventurerDetailInfoContainer>
              <figure>
                <img src={this.state.currentAvatar} alt="portrait" />
              </figure>
              <ArticleElement adventurerDetails>
                <ElementTopStripe />
                <div className="onTop">
                  <form>
                    <label>
                      <ParaText>Name:</ParaText>
                      <input type="text" value={this.state.currentName}></input>
                    </label>
                  </form>
                  <form>
                    <label>
                      <ParaText>Class:</ParaText>
                      <select>
                        <option value={1}>Bard</option>
                        <option value={2}>Barbarian</option>
                        <option value={3}>Cleric</option>
                        <option value={4}>Fighter</option>
                        <option value={5}>Rogue</option>
                        <option value={6}>Wizard</option>
                      </select>
                    </label>
                  </form>
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
);

export default AdventurerEditPage;
