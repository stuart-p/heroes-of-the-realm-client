import styled, { css } from "styled-components";
import theme from "./themes";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 25px;
  right: 0px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 100;
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

  ${props =>
    props.navShowing &&
    css`
      height: 17.5em;
    `}
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  font-size: 1.3em;
  margin-top: 5px;

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
`;

export const HeaderButtonBox = styled.menu`
  position: relative;
  margin: 15px 20px 0 0;
  display: flex;
`;

export const Jumbo = styled.section`
  background-image: url("../assets/mountainBG.png");
  width: 100%;
  background-size: cover;
  background-position-y: center;
  height: 90vh;
  max-height: 850px;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 0.5s ease;
  .jumboHeadingContainer {
    margin: 10vh 0 0 0;
    max-width: 600px;
    align-self: flex-start;
  }
  .jumboSubHeadingContainer {
    color: white;
    padding: 10px 5px;
    z-index: 1;
    /* margin-top: auto; */
    position: relative;
  }

  button {
    align-self: center;
  }
`;

export const FrostedContainer = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
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
  right: 0;
  margin: 10px 30px 0 0;
  padding: 5px 5px;

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
  }
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
  width: 80vw;
  height: 80vh;
  overflow-y: auto;
`;

export const AdventurerRankingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  transform-origin: top left;
  transform: skewY(7deg);
  margin: 4vw 20% 0 2%;
  list-style-type: none;
`;

export const AdventurerCardListItem = styled.li`
  transform-origin: top left;
  transform: skewY(-7deg) rotateZ(-14deg);
  padding-top: 150%;
  z-index: 1;
  transition-property: z-index;
  transition-duration: 0.3s;
  margin: 0 2vw 0 0;

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
  }
  &:hover img {
    height: 180%;
    transform: translate(-50%, -14%);

    z-index: 2;
  }
`;

export const AdventurerDetailPane = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdventureDetailedCard = styled.section`
  width: 500px;
  max-width: 80vw;
  height: 70vh;
  max-height: 800px;

  background-color: ${theme.d};
  border-radius: 2vw;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.3);
`;
