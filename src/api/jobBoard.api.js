import axios from "axios";
import { auth } from "../stores/auth";

const baseURL = "api/quest/";

export const getJobs = () => {
  return axios
    .get(baseURL + "active", {
      headers: { authorization: `bearer ${auth.token}` },
    })
    .then((res) => {
      return { quests: res.data };
    });
};

export const getJob = (id) => {
  return axios
    .get(baseURL + id, { headers: { authorization: `bearer ${auth.token}` } })
    .then((res) => {
      return { quest: res.data };
    });
};

export const beginJob = (id) => {
  return axios.patch(
    `${baseURL}${id}/begin`,
    { UserID: auth.userID },
    { headers: { authorization: `bearer ${auth.token}` } }
  );
};

export const requestCreateNewQuest = () => {
  return axios.post(
    baseURL + "new",
    {},
    { headers: { authorization: `bearer ${auth.token}` } }
  );
};

export const requestQuestCompletion = (id) => {
  console.log(auth.token);
  return axios.patch(
    `${baseURL}${id}/complete`,
    {},
    { headers: { authorization: `bearer ${auth.token}` } }
  );
};
