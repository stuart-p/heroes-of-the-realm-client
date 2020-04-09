import React from "react";
import { StyledLink, ParaText, SectionHeading } from "../styles/text.style";
import { AdventurerCardListItem } from "../styles/Containers.style";

const AdventurerCard = ({ knownAs, level, photoURL, charClass, id }) => {
  return (
    <AdventurerCardListItem>
      <StyledLink to={`${id}`}>
        <div>
          <SectionHeading color={"white"}>{knownAs}</SectionHeading>
          <ParaText color={"white"}> level {level}</ParaText>
          <figure>
            <img src={photoURL} alt="adventurer avatar" />
          </figure>
        </div>
      </StyledLink>
    </AdventurerCardListItem>
  );
};

export default AdventurerCard;
