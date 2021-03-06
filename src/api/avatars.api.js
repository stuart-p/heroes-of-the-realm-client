import axios from "axios";
import { auth } from "../stores/auth";

const baseURL = "/api/avatar/";

export const requestNextAvatarURL = (currentURL, isNext) => {
  return axios
    .post(
      baseURL + "newAvatar",
      { currentURL, isNext },
      { headers: { authorization: `bearer ${auth.token}` } }
    )
    .then((res) => {
      return res.data;
    });
};
