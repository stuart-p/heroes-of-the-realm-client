import axios from "axios";
import { auth } from "../stores/auth";

const baseURL = "http://localhost:5000/api/users/";

export const getAdventurers = () => {
  return axios
    .get(baseURL, { headers: { authorization: `bearer ${auth.token}` } })
    .then((res) => {
      console.log(res);
      return { adventurers: res.data };
    });
};

export const getAdventurer = (id) => {
  return axios
    .get(baseURL + id, { headers: { authorization: `bearer ${auth.token}` } })
    .then((res) => {
      console.log(res);
      return { adventurer: res.data };
    });
};
