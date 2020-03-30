import { decorate, observable, computed, action } from "mobx";

export const auth = observable({
  token: null,
  loggedIn: false,
  username: null,
  userID: null,
  expires: null
});

export const setToken = action(token => {
  auth.token = token;
});

export const setLoginStatus = action(isLoggedIn => {
  auth.loggedIn = isLoggedIn;
});

export const setUserData = action((username, userID) => {
  auth.username = username;
  auth.userID = userID;
});

export const setExpiry = action(expires => {
  auth.expires = expires;
});

export const logOut = action(() => {
  auth.token = null;
  auth.loggedIn = false;
  auth.username = null;
  auth.userID = null;
  auth.expires = null;
});
