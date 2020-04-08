import axios from "axios";
import { auth } from "../stores/auth";

const baseURL = "http://localhost:5000/api/quest/";

export const getJobs = () => {
  return axios
    .get(baseURL + "active", {
      headers: { authorization: `bearer ${auth.token}` },
    })
    .then((res) => {
      console.log(res);
      return { quests: res.data };
    });
};

export const getJob = (id) => {
  return axios
    .get(baseURL + id, { headers: { authorization: `bearer ${auth.token}` } })
    .then((res) => {
      console.log(res);
      return { quest: res.data };
    });
};

export const beginJob = (id) => {
  return axios
    .patch(
      `${baseURL}${id}/begin`,
      { UserID: auth.userID },
      { headers: { authorization: `bearer ${auth.token}` } }
    )
    .then((res) => {
      console.log(res);
    });
};
