import axios from "axios";
import { auth } from "../stores/auth";

const baseURL = "api/users/";

export const getAdventurers = () => {
  return axios
    .get(baseURL, { headers: { authorization: `bearer ${auth.token}` } })
    .then((res) => {
      return { adventurers: res.data };
    });
};

export const getAdventurer = (id) => {
  return axios
    .get(baseURL + id, { headers: { authorization: `bearer ${auth.token}` } })
    .then((res) => {
      return { adventurer: res.data };
    });
};

export const updateProfileDetails = (userProfileChanges) => {
  const id = auth.userID;
  return axios
    .put(baseURL + id, userProfileChanges, {
      headers: { authorization: `bearer ${auth.token}` },
    })
    .then((res) => {
      return;
    });
};
