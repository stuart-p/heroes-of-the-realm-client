import React, { Component } from "react";
import { ParaText } from "../styles/text.style";
import { getAdventurers } from "../../api/adventurers.api";
import { auth } from "../../stores/auth";
import { Redirect, Router, Link } from "@reach/router";
import { observer } from "mobx-react";
import AdventurerDetailPage from "./AdventurerDetailPage";
import {
  AdventurerListContainter,
  AdventurerRankingList
} from "../styles/Containers.style";
import AdventurerCard from "./AdventurerCard";

const AdventurerRankingPage = observer(
  class AdventurerRankingPage extends Component {
    state = {
      adventurers: []
    };

    componentDidMount = () => {
      getAdventurers()
        .then(({ adventurers }) => {
          this.setState({ adventurers });
        })
        .catch(err => {
          console.log(err);
        });
    };

    render() {
      return auth.loggedIn ? (
        <>
          <div>
            <ParaText>List of adventurers</ParaText>
          </div>
          <AdventurerListContainter>
            <AdventurerRankingList>
              {this.state.adventurers.map(adventurer => {
                return <AdventurerCard {...adventurer} key={adventurer.id} />;
              })}
            </AdventurerRankingList>
          </AdventurerListContainter>
          <Router>
            <AdventurerDetailPage path=":id" />
          </Router>
        </>
      ) : (
        <Redirect noThrow to="/" />
      );
    }
  }
);

export default AdventurerRankingPage;
