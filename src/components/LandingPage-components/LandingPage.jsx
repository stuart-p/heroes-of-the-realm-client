import React from "react";
import { observer } from "mobx-react";
import { auth } from "../../stores/auth";
import {
  Jumbo,
  FrostedContainer,
  ExplainerContainer,
  ArticleElement,
  ElementTopStripe,
  NavLinksContainer,
} from "../styles/Containers.style";
import { Button, ListOfLinks } from "../styles/UI.style";
import {
  JumboHeading,
  ParaText,
  SubHeading,
  LineBreak,
} from "../styles/text.style";
import { Link } from "@reach/router";

const LandingPage = observer(() => {
  return (
    <>
      <Jumbo>
        <div className="jumboHeadingContainer">
          <JumboHeading>Heroes of the Realm</JumboHeading>
        </div>
        {auth.loggedIn ? (
          <Link to="/quests">
            <Button>find nearby quests</Button>
          </Link>
        ) : (
          <section className="jumboSubHeadingContainer">
            <FrostedContainer />
            <ParaText>
              Don't want to register an account right now? You can log in using
              the guest account with the following credentials: <br />
              username: guest <br />
              password: secretPassword
            </ParaText>
          </section>
        )}
      </Jumbo>
      <ExplainerContainer>
        <article>
          <SubHeading decorative>About this site</SubHeading>
          <LineBreak />
          <ArticleElement>
            <ElementTopStripe />
            <div className="onTop">
              <SubHeading color={"white"}>What is this?</SubHeading>
              <ParaText>
                This is a portfolio piece created by Stuart Palmer in March
                2020, as a demonstration tool for .NET Core, JWT authentication,
                and MobX state management. Please feel free to browse my other
                work or contact me through my portfolio page{" "}
                <a href="https://stuart-p.github.io">HERE</a>.
              </ParaText>
            </div>
          </ArticleElement>
          <ArticleElement>
            <ElementTopStripe />
            <div className="onTop">
              <SubHeading color={"white"}>What does it do?</SubHeading>
              <ParaText>
                Heroes of the Realm allows users to sign-up and login to a jobs
                board-style website, modelled as Fantasty Realms/D&D adventuring
                quests. Users can customise their profile, and can then select
                to complete quests and receive profile 'experience' based on
                this.
              </ParaText>
            </div>
          </ArticleElement>
          <ArticleElement>
            <ElementTopStripe />
            <div className="onTop">
              <SubHeading color={"white"}>How was it made?</SubHeading>

              <ParaText>
                The front-end is written with React, with @reach-router for
                single-page-application routing. MobX was used for state
                management, including the session storage of JWT access
                privilages once the user has logged in. The source code can be
                found{" "}
                <a href="https://github.com/stuart-p/heroes-of-the-realm-client">
                  HERE
                </a>
                .
                <br />
                The back-end is a .NET Core 3.1 server, with an MySQL database.
                It is hosted on an Azure server. The source code can be found{" "}
                <a href="https://github.com/stuart-p/heroes-of-the-realm-server">
                  HERE
                </a>
                .
              </ParaText>
            </div>
          </ArticleElement>
        </article>
        <NavLinksContainer>
          <SubHeading decorative>Links</SubHeading>
          <LineBreak />
          <ListOfLinks>
            <li>
              <a href="https://stuart-p.github.io">
                <ParaText>Portfolio</ParaText>
              </a>
            </li>
            <li>
              <a href="https://github.com/stuart-p/">
                <ParaText>GitHub</ParaText>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/stuart-palmer-a0686139/">
                <ParaText>Linkedin</ParaText>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/StuartDPalmer">
                <ParaText>Twitter</ParaText>
              </a>
            </li>
          </ListOfLinks>
        </NavLinksContainer>
      </ExplainerContainer>
    </>
  );
});

export default LandingPage;
