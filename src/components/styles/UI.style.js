import styled, { css } from "styled-components";
import theme from "./themes";

export const Button = styled.button`
  margin: 5px 10px;
  padding: 5px 25px;
  border: none;
  border-radius: 2px;
  background: ${(props) => (props.altBG ? theme.c : theme.d)};
  color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.3);
  font-size: 1.3em;
  transition: all 0.5s ease;
  &:hover:enabled {
    background: ${theme.c};
  }
  &:active:enabled {
    background: ${theme.b};
  }

  ${(props) =>
    props.arrow &&
    css`
      margin: 0;
      padding: 15px 5px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    `}
   ${(props) =>
     props.previous &&
     css`
       left: 0;
     `}
      ${(props) =>
        props.next &&
        css`
          right: 0px;
        `}
  
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.altBG ? theme.b : theme.a)};
  border-radius: 2px;
  border: solid 5px ${theme.d};
  box-shadow: inset 2px 2px 5px 0 rgba(0, 0, 0, 0.3),
    0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.3);

  color: black;
  padding: 10px 10px;

  overflow: hidden;

  input {
    margin: 10px 4px;
    padding: 3px 5px;
    border: none;
    border-radius: 3px;
  }
`;

export const PopupBox = styled.aside`
  background-color: ${theme.c};
  border-radius: 5px;
  color: white;
  border: solid 2px ${theme.a};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.3);
  font-size: 0.8em;
  margin: 5px 0;

  p {
    margin: 0;
    padding: 5px 5px;
  }
`;

export const ListOfLinks = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  li {
    background-color: ${theme.d};
    padding: 10px 10px;
    margin: 5px 0 0 0;
    a {
      text-decoration: none;
      p {
        color: white;
      }
    }
  }
`;

export const QuestProgressContainer = styled.div`
  margin: 4% 6%;
  position: relative;
  background-color: ${theme.e};
  padding: 0;
  height: 20px;
  width: 85%;
  border-radius: 50px;
  z-index: 4;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
`;

export const QuestProgressFill = styled.div`
  background: ${theme.c};
  height: 100%;
  border-radius: inherit;
  transition: width 1s linear;
  width: ${(props) => props.percentage}%;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 500px;
    height: 100%;
    background-repeat: repeat-x;
    background: repeating-linear-gradient(
      45deg,
      rgba(238, 238, 238, 0.5) 0%,
      rgba(238, 238, 238, 0.5) 25%,
      transparent 25%,
      transparent 50%,
      rgba(238, 238, 238, 0.5) 50%,
      rgba(238, 238, 238, 0.5) 75%,
      transparent 75%,
      transparent 100%
    );
    background-size: 20px;
    backface-visibility: hidden;
    animation: shift 3s linear infinite;

    @keyframes shift {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(-60px, 0, 0);
      }
    }
  }
`;
