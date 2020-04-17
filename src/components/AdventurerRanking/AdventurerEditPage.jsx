import React from "react";
import { getAdventurer, updateProfileDetails } from "../../api/adventurers.api";
import { formatErrorMessage } from "../../utils/formatting.utils";
import {
  AdventurerDetailPane,
  AdventureDetailedCard,
  ArticleElement,
  QuestDetiledBanner,
  EditDetailsSection,
} from "../styles/Containers.style";
import { ParaText, SubHeading, KeyText } from "../styles/text.style";
import { Button } from "../styles/UI.style";
import { toast } from "react-toastify";
import { Redirect } from "@reach/router";
import { auth } from "../../stores/auth";
import { observer } from "mobx-react";
import { requestNextAvatarURL } from "../../api/avatars.api";

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
    handleNameChange = (target) => {
      this.setState({ currentName: target.value }, () => {
        this.hasChanged();
      });
    };
    handleClassChange = (target) => {
      this.setState({ currentClass: parseInt(target.value) }, () => {
        this.hasChanged();
      });
    };
    handleAvatarClick = (isNext) => {
      requestNextAvatarURL(this.state.currentAvatar, isNext).then(
        ({ avatarURL }) => {
          this.setState({ currentAvatar: avatarURL }, () => {
            this.hasChanged();
          });
        }
      );
    };

    handleSubmit = (event) => {
      event.preventDefault();
      const userProfileChanges = {
        avatarURL: this.state.currentAvatar,
        charClass: this.state.currentClass,
        knownAs: this.state.currentName,
      };
      updateProfileDetails(userProfileChanges)
        .then(() => {
          this.setToClean();
        })
        .then(() => {
          toast.success("profile updated!");
        })
        .catch((err) => {
          const errorMessage = formatErrorMessage(err);
          toast.error(`Error. ${errorMessage}`);
        });
    };

    componentDidMount = () => {
      this.setToClean();
    };

    render() {
      return auth.loggedIn ? (
        <AdventurerDetailPane>
          <AdventureDetailedCard>
            <QuestDetiledBanner>
              <SubHeading color={"white"}>Edit Your Profile</SubHeading>
            </QuestDetiledBanner>
            <EditDetailsSection>
              <figure>
                <Button
                  arrow
                  previous
                  onClick={(event) => this.handleAvatarClick(false)}
                >
                  <i className="fas fa-chevron-left"></i>
                </Button>
                <img src={this.state.currentAvatar} alt="portrait" />
                <Button
                  arrow
                  next
                  onClick={(event) => this.handleAvatarClick(true)}
                >
                  <i className="fas fa-chevron-right"></i>
                </Button>
              </figure>
              <ArticleElement adventurerDetails>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    <ParaText>Name:</ParaText>
                    <input
                      type="text"
                      value={this.state.currentName}
                      required
                      onChange={(event) => {
                        this.handleNameChange(event.target);
                      }}
                    ></input>
                  </label>
                </form>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    <ParaText>Class:</ParaText>
                    <select
                      value={this.state.currentClass}
                      onChange={(event) => {
                        this.handleClassChange(event.target);
                      }}
                    >
                      <option value={1}>Bard</option>
                      <option value={2}>Barbarian</option>
                      <option value={3}>Druid</option>
                      <option value={4}>Cleric</option>
                      <option value={5}>Fighter</option>
                      <option value={6}>Rogue</option>
                      <option value={7}>Wizard</option>
                    </select>
                  </label>
                </form>
              </ArticleElement>
            </EditDetailsSection>
            {this.state.hasChanged && (
              <KeyText>You have unsaved changes</KeyText>
            )}
            <Button
              disabled={!this.state.hasChanged}
              onClick={this.handleSubmit}
            >
              Save Changes
            </Button>
          </AdventureDetailedCard>
        </AdventurerDetailPane>
      ) : (
        <Redirect noThrow to="/" />
      );
    }
  }
);

export default AdventurerEditPage;
