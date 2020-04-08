import axios from "axios";
import {
  setToken,
  setLoginStatus,
  setUserData,
  setExpiry,
} from "../stores/auth";
import jwt_decode from "jwt-decode";

const baseURL = "http://localhost:5000/api/auth/";

export const loginRequest = (username, password) => {
  console.log(username, password);
  return axios.post(baseURL + `login`, { username, password }).then((res) => {
    const tokenPayload = jwt_decode(res.data.token);
    if (tokenPayload !== null) {
      setToken(res.data.token);
      setLoginStatus(true);
      setUserData(tokenPayload.unique_name, tokenPayload.nameid);
      setExpiry(tokenPayload.exp);
    }

    return;
  });
};

export const registerRequest = (username, password) => {
  return axios.post(baseURL + "register", { username, password }).then(() => {
    return { username, password };
  });
};
