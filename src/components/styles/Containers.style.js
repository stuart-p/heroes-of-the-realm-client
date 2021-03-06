import styled, { css } from "styled-components";
import theme from "./themes";
import { SubHeading } from "./text.style";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 25px;
  right: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 100;
  pointer-events: none;
`;

export const HeaderIcon = styled.div`
  justify-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  margin-right: auto;
  padding: 0px 0px 0 0;
  border-radius: 2px;
  background: ${theme.d};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
  height: 2.5em;
  pointer-events: auto;
  button {
    border: none;
    background: none;
    display: flex;
    align-items: flex-end;
    margin: 0 0;
    text-decoration: none;
    color: white;
    font-size: 1em;
    transition: all 0.5s ease;
    padding: 5px 10px 0 0;
    height: 2.5em;
    i {
      padding: 0px 5px 5px;
      margin: auto 0;
    }
    &:hover {
      background: ${theme.c};
    }
    &:active {
      background: ${theme.b};
    }
  }

  ${(props) =>
    props.navShowing &&
    css`
      height: 17.5em;
    `}
`;

export const NavMenu = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  font-size: 1.3em;
  margin-top: 5px;
  pointer-events: auto;
  a {
    text-decoration: none;
    color: white;
    margin: 4px 0 0;
    padding: 3px 0;
    transition: all 0.5s ease;
    width: 100%;
    display: inline-block;
    &:hover {
      background: ${theme.c};
    }
    &:active {
      background: ${theme.b};
    }
  }

  ${(props) =>
    props.navShowing &&
    css`
      display: flex;
    `}
`;

export const HeaderButtonBox = styled.menu`
  position: relative;
  margin: 15px 20px 0 0;
  display: flex;
  padding: 0;
  pointer-events: auto;
`;

export const Jumbo = styled.section`
  background-image: url("../assets/mountainBG.png");
  width: 100%;
  background-size: cover;
  background-position-y: center;
  height: 80vh;
  max-height: 850px;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.5s ease;
  .jumboHeadingContainer {
    margin: 6rem 0 0 0;
    max-width: 600px;
    align-self: flex-start;
  }
  .jumboSubHeadingContainer {
    color: white;
    padding: 10px 5px;
    z-index: 1;
    margin-top: auto;
    position: relative;
    justify-self: flex-end;
  }

  a {
    margin-top: auto;
    align-self: center;
    justify-self: flex-end;
  }
`;

export const FrostedContainer = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),
    0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),
    0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);
  z-index: -1;
`;

export const LoginContainer = styled.aside`
  position: absolute;
  top: 100%;
  left: 0;
  margin: 10px 30px 0 30px;
  padding: 5px 5px;
pointer-events:auto;
  overflow: hidden;

  border: none;
  border-radius: 2px;
  /* background: ${theme.d}; */
  color: white;
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.3); */
  font-size: 1.3em;
`;

export const ExplainerContainer = styled.section`
  width: 85vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 5vw;
  height: max-content;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    aside {
      margin: 0;
      width: 70vw;
    }
  }
`;

export const ArticleElement = styled.div`
  margin: 3em 0;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  .onTop {
    position: relative;
    z-index: 50;

    ${SubHeading} {
      @media only screen and (max-width: 600px) {
        font-size: 1.4rem;
        margin-bottom: 10px;
      }
    }
  }

  ${(props) =>
    props.adventurerDetails &&
    css`
      margin: 0 5px;
      width: 50%;
      overflow-x: hidden;
      overflow-y: auto;
      max-height: 95%;
    `}
`;

export const ElementTopStripe = styled.div`
  position: absolute;
  width: 100%;
  height: 2.8em;
  background-color: ${theme.c};
  transition: width 0.4s;
  z-index: 0;
`;

export const NavLinksContainer = styled.aside`
  margin: 0 0 0 3em;
  width: 30vw;
  max-width: 300px;
`;

export const AdventurerListContainter = styled.section`
  width: 93vw;
  /* height: 80vh; */
`;

export const AdventurerRankingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  transform-origin: top left;
  transform: skewY(7deg);
  margin: 6vw 18% 0 2%;
  padding: 0;
  list-style-type: none;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AdventurerCardListItem = styled.li`
  transform-origin: top left;
  transform: skewY(-7deg) rotateZ(-14deg);
  padding-top: 150%;
  z-index: 1;
  transition-property: z-index;
  transition-duration: 0.3s;
  margin: 0 2.5vw 0 0;

  div {
    position: absolute;
    margin: 0;
    padding: 0;
    z-index: 2;
    width: 98%;
    height: 95%;
    top: 0;
    background-color: ${theme.d};
    border-radius: 2vw;
    -webkit-filter: drop-shadow(2px 6px 3px rgba(0, 0, 0, 0.4));
    filter: drop-shadow(2px 6px 3px rgba(0, 0, 0, 0.4));
    transform: rotate(0deg) translate(0, 0);
    transition-property: transform;
    transition-duration: 0.3s;
    overflow: hidden;
  }

  h4,
  p {
    position: absolute;
    background-color: ${theme.d};
    z-index: 4;
  }

  h4 {
    top: 3.5%;
    left: 4%;
  }

  p {
    bottom: 3.5%;
    right: 5%;
    padding: 5px 5px;
    font-size: 1.8rem;
  }
  figure {
    position: absolute;
    z-index: 3;
    width: 88%;
    height: 91%;
    margin: 0;
    padding: 0;
    top: 0;
    transform: translatex(6.5%) translateY(5%);
    border-radius: 1.2vw;
    overflow: hidden;

    img {
      position: relative;
      left: 50%;
      height: 110%;
      transform: translate(-50%, -2%);
      transition: transform, height 0.4s ease;
      z-index: 2;
      border-radius: inherit;
    }
  }

  &:hover {
    z-index: 4;
  }
  &:hover div {
    transform: rotateZ(14deg) translate(0%, 10%) scale(1.6);

    @media only screen and (max-width: 900px) {
      transform: rotate(14deg) translate(0, 10%) scale(1);
    }
  }
  &:hover img {
    height: 180%;
    transform: translate(-50%, -14%);

    z-index: 2;
  }
`;

export const AdventurerDetailPane = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 100vw;
`;

export const AdventureDetailedCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  margin-top: 10vh;
  max-width: 95vw;
  height: 80vh;
  max-height: 800px;
  background-color: ${theme.e};
  border-radius: 2vw;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  ${(props) =>
    props.altBG &&
    css`
      background-color: ${props.altBG};
    `}
`;
export const AdventurerDetailInfoContainer = styled.section`
  width: 97%;
  height: 85%;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 10px 0;

  figure {
    max-width: 50%;
    border-radius: 2vw;
    overflow: hidden;
    box-shadow: inset 2px 2px 5px 0 rgba(0, 0, 0, 0.3),
      0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.3);
    img {
      width: 100%;
      height: auto;
    }
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;

    figure {
      max-width: 90%;
      max-height: 50%;

      img {
        height: 100%;
        object-fit: cover;
        margin: 0 auto;
      }
    }

    ${ArticleElement} {
      max-height: 50%;
      width: 90%;
    }
  }
`;

export const QuestListContainter = styled.section`
  width: 90vw;
  height: 80vh;
`;

export const ActiveQuestsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style-type: none;
  padding: 0;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const QuestCardListItem = styled.li`
  --bgColor: ${(props) =>
    props.isInProgress ? theme.c : props.isComplete ? theme.e : theme.d};

  padding-top: 36vh;
  z-index: 1;
  transition-property: z-index;
  transition-duration: 0.3s;
  margin: 0 2vw 0 0;
  position: relative;

  .questDetailsContainer {
    position: absolute;
    margin: 0;
    padding: 0;
    z-index: 2;
    width: 98%;
    height: 95%;
    top: 0;
    background-color: var(--bgColor);
    border-radius: 2vw;
    -webkit-filter: drop-shadow(2px 6px 3px rgba(0, 0, 0, 0.4));
    filter: drop-shadow(2px 6px 3px rgba(0, 0, 0, 0.4));
    transform: translate(0, 0);
    transition-property: transform;
    transition-duration: 0.3s;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }

  h4,
  h5,
  progress {
    margin: 4% 6%;
    z-index: 4;
    position: relative;
  }

  h4 {
    justify-self: flex-start;
    align-self: flex-start;
    margin-bottom: auto;
  }

  h5 {
    padding: 5px 5px;
  }

  figure {
    position: absolute;
    z-index: 3;
    width: 88%;
    height: 91%;
    margin: 0;
    padding: 0;
    top: 0;
    transform: translatex(6.5%) translateY(5%);
    border-radius: 1.2vw;
    overflow: hidden;
    align-self: flex-start;

    img {
      position: relative;
      left: 50%;
      height: 120%;
      transform: translate(-50%, -2%);
      transition: transform, height 0.4s ease;
      z-index: 2;
      border-radius: inherit;
    }
  }

  &:not(:active):hover {
    z-index: 4;
  }
  &:not(:active):hover .questDetailsContainer {
    transform: translate(0%, 10%) scale(1.4);
  }
  &:not(:active):hover img {
    height: 160%;
    transform: translate(-50%, -14%);

    z-index: 2;
  }
`;

export const QuestDetiledBanner = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 3.2em;
  background-color: ${(props) => (props.bg ? props.bg : theme.c)};
  z-index: 0;

  p {
    z-index: 50;
    justify-self: flex-start;
  }
`;

export const EditDetailsSection = styled.section`
  width: 97%;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 3.2em 0 1.5em 0;

  figure {
    max-width: 50%;
    border-radius: 2vw;
    overflow: hidden;
    position: relative;
    box-shadow: inset 2px 2px 5px 0 rgba(0, 0, 0, 0.3),
      0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.3);
    img {
      width: 100%;
      height: auto;
    }
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;

    figure {
      max-height: 40%;
      max-width: 90%;

      img {
        height: 100%;
        object-fit: cover;
        margin: 0 auto;
      }
    }
    ${ArticleElement} {
      max-height: 40%;
      width: 90%;
    }
  }

  div form {
    padding: 10px 10px;
    margin: 5px 0;
    background-color: ${theme.d};

    label {
      color: white;
    }
    label input {
      border: none;
      border-radius: 2px;
      font-family: "Raleway", sans-serif;
      font-weight: 700;
      font-size: 1.1rem;
      padding: 5px 20px;
      margin: 0;
      text-align: left;
      color: black;
      box-shadow: inset 2px 2px 5px 0 rgba(0, 0, 0, 0.3),
        0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.3);
    }

    label select {
      border: none;
      border-radius: 2px;
      font-family: "Raleway", sans-serif;
      font-weight: 700;
      font-size: 1.1rem;
      padding: 5px 20px;
      margin: 0;
      text-align: left;
      color: black;
      box-shadow: inset 2px 2px 5px 0 rgba(0, 0, 0, 0.3),
        0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const LoadingInterstitial = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 100;
  background-color: #fee9d7;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23452735' stroke-width='50.4' stroke-opacity='0.03' %3E%3Ccircle fill='%23fee9d7' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fee8d6' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23fde7d5' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23fde5d4' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23fde4d3' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23fce3d2' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23fce2d2' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23fbe0d1' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23fbdfd0' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23fbdecf' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23faddce' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23fadbce' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23f9dacd' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23f9d9cc' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23f8d8cc' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23f8d6cb' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23f8d5cb' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23f7d4ca' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  /* background by SVGBackgrounds.com */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    width: 200px;
    height: 100px;
    margin: 20px;
  }
`;
