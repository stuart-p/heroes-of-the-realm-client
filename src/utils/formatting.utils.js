export const formatErrorMessage = data => {
  if (data === undefined) {
    return "";
  } else if (typeof data === String) {
    return data;
  } else if (data.data !== undefined) {
    return data.data.response;
  } else return "";
};

export const formatCharClass = classID => {
  const characterClasses = {
    1: "Bard",
    2: "Barbarian",
    3: "Druid",
    4: "Cleric",
    5: "Fighter",
    6: "Rogue",
    7: "Wizard"
  };

  return classID > 0 && classID < 8 ? characterClasses[classID] : 1;
};

export const formatDurationString = duration => {
  let secondsRemainingTotal = duration;
  const days = Math.floor(secondsRemainingTotal / 86400);
  secondsRemainingTotal %= 86400;
  const hours = Math.floor(secondsRemainingTotal / 3600);
  secondsRemainingTotal %= 3600;
  const minutes = Math.floor(secondsRemainingTotal / 60);
  const seconds = (secondsRemainingTotal %= 60);

  return `
  ${days > 0 ? days + " days, " : ""}
  ${hours > 0 ? hours + " hours, " : ""}
  ${minutes > 0 ? minutes + "minutes, " : ""}
    ${seconds > 0 ? seconds + " seconds" : ""} 
  `;
};
