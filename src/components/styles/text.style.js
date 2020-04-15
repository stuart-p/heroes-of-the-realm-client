import styled, { css } from "styled-components";
import theme from "./themes";
import { Link } from "@reach/router";

export const JumboHeading = styled.h1`
  font-family: "Cinzel Decorative", cursive;
  font-weight: 700;
  font-size: 3.5em;
  color: ${theme.c};
  text-shadow: 1px 1px rgba(255, 255, 255, 1);
  /* background-color: rgba(247, 212, 202, 0.4); */
`;

export const SubHeading = styled.h3`
  font-family: "Raleway", sans-serif;
  font-size: 1.8em;
  padding: 5px 20px;
  margin: 0;
  text-align: left;
  max-width: 75ch;
  ${(props) =>
    props.decorative &&
    css`
      font-family: "Cinzel Decorative", cursive;
      font-weight: 700;

      margin: 20px 0 0 0;
    `}

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;
export const SectionHeading = styled.h4`
  font-family: "Raleway", sans-serif;
  font-size: 1.1rem;
  padding: 3px 5px;
  font-weight: 700;
  margin: 0;
  text-align: left;
  ${(props) =>
    props.decorative &&
    css`
      font-family: "Cinzel Decorative", cursive;
      font-weight: 700;

      margin: 20px 0 0 0;
    `}

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

export const KeyText = styled.h5`
  font-family: "Raleway", sans-serif;
  font-size: 1.1rem;
  padding: 5px 20px;
  margin: 0;
  text-align: left;
  max-width: 75ch;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

export const ParaText = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 1.1rem;
  padding: 5px 20px;
  margin: 0;
  text-align: left;
  max-width: 75ch;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

export const DecorativePara = styled.p`
  font-family: "Cinzel Decorative", cursive;
  font-size: 1.2em;
  padding: 5px 20px;
  margin: 0;
  text-align: left;
  color: ${theme.c};

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

export const LineBreak = styled.hr`
  border: none;
  border-top: 2px solid ${(props) => (props.col ? props.col : theme.c)};
  margin: 5px 0px 5px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
