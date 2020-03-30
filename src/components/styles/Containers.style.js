import styled from "styled-components";
import theme from "./themes";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 25px;
  right: 0px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 5;
`;

export const HeaderIcon = styled.div`
  justify-items: flex-start;
  margin-right: auto;
  padding: 3px 5px 0 0;
  border-radius: 2px;
  background: ${theme.d};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.3);
  a {
    display: flex;
    align-items: flex-end;
    margin: auto 0;
    text-decoration: none;
    color: white;

    i {
      padding: 0px 5px 5px;
      margin: auto 0;
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
