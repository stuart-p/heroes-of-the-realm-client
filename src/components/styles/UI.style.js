import styled, { css } from "styled-components";
import theme from "./themes";

export const Button = styled.button`
  margin: 5px 10px;
  padding: 5px 25px;
  border: none;
  border-radius: 2px;
  background: ${props => (props.altBG ? theme.c : theme.d)};
  color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.3);
  font-size: 1.3em;
  transition: all 0.5s ease;
  &:hover {
    background: ${theme.c};
  }
  &:active {
    background: ${theme.b};
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.altBG ? theme.b : theme.a)};
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
