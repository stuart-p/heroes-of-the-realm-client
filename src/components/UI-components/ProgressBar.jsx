import React from "react";
import ProgressFill from "./ProgressFill";
import { QuestProgressContainer } from "../styles/UI.style";

const ProgressBar = (props) => {
  return (
    <QuestProgressContainer>
      <ProgressFill
        percentage={props.percentage}
        timeRemaining={props.timeRemaining}
      />
    </QuestProgressContainer>
  );
};

export default ProgressBar;
