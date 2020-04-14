import React from "react";
import { QuestProgressFill } from "../styles/UI.style";

const ProgressFill = (props) => {
  return (
    <QuestProgressFill
      percentage={props.percentage}
      timeRemaining={props.timeRemaining}
    ></QuestProgressFill>
  );
};

export default ProgressFill;
