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
