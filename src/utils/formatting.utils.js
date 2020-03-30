export const formatErrorMessage = data => {
  if (data === undefined) {
    return "";
  } else if (typeof data === String) {
    return data;
  } else if (data.data !== undefined) {
    return data.data.response;
  } else return "";
};
