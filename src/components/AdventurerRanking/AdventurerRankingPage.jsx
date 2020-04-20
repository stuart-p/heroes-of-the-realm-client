import React, { Component } from "react";
import { ParaText, SubHeading, LineBreak } from "../styles/text.style";
import { getAdventurers } from "../../api/adventurers.api";
import { auth } from "../../stores/auth";
import { Redirect, Router } from "@reach/router";
import { observer } from "mobx-react";
import AdventurerDetailPage from "./AdventurerDetailPage";
import {
  AdventurerListContainter,
  AdventurerRankingList,
  ExplainerContainer,
  ArticleElement,
  ElementTopStripe,
} from "../styles/Containers.style";
import AdventurerCard from "./AdventurerCard";
import { toast } from "react-toastify";
import { formatErrorMessage } from "../../utils/formatting.utils";
import { OnRouteChange } from "../LandingPage-components/RouteChange";

const AdventurerRankingPage = observer(
  class AdventurerRankingPage extends Component {
    state = {
      adventurers: [],
    };

    componentDidMount = () => {
      getAdventurers()
        .then(({ adventurers }) => {
          this.setState({ adventurers });
        })
        .catch((err) => {
          console.log(err);
          const msg = formatErrorMessage(err);
          toast.error(`Err. ${msg}`);
        });
    };

    render() {
      return auth.loggedIn ? (
        <>
          <ExplainerContainer>
            <article>
              <SubHeading decorative>Heroes' League</SubHeading>
              <LineBreak />
              <ArticleElement>
                <ElementTopStripe />
                <div className="onTop">
                  <SubHeading color={"white"}>
                    The greatest heroes in the land!
                  </SubHeading>
                  <ParaText>
                    Welcome to the league of heroes! Here you will find details
                    of all the heroes registered in the guild, ranked according
                    to their experience level.
                    <br />
                    Select a portrait to find our more information about a
                    particular hero.
                  </ParaText>
                </div>
              </ArticleElement>
            </article>
          </ExplainerContainer>
          <AdventurerListContainter>
            <AdventurerRankingList>
              {this.state.adventurers.map((adventurer) => {
                return <AdventurerCard {...adventurer} key={adventurer.id} />;
              })}
            </AdventurerRankingList>
          </AdventurerListContainter>
          <Router>
            <AdventurerDetailPage path=":id/*" />
          </Router>
          <OnRouteChange
            action={() => {
              window.scrollTo(0, 0);
            }}
          />
        </>
      ) : (
        <Redirect noThrow to="/" />
      );
    }
  }
);

export default AdventurerRankingPage;
