import {
  FETCH_USER,
  USER_SET,
  USER_ERROR,
  USER_LOGOUT,
  FETCH_USER_ID,
  FETCH_USERS_ERROR,
  GET_ERRORS
} from "./Types";
import { API_URL } from "../Utils/Constants";
import Axios from "axios";
import setAuthorizationToken from "../Utils/AuthorizationToken";

export const fetchUser = () => dispatch => {
  Axios.get(API_URL + "/auth/current").then(response => {
    dispatch({
      type: FETCH_USER,
      payload: response.data
    });
  });
};

//TODO: Need to update for login.
export const userLogin = auth => dispatch => {
  //doLogin
  let email = auth.email;
  let password = auth.password;

  return Axios.post(API_URL + "/auth/login", {
    email,
    password
  })
    .then(res => {
      let token = res.data.id;
      //Set User Token For Axios
      localStorage.setItem("token", token);
      setAuthorizationToken(token);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        errors: err.response.data
      });
    });
};

// TODO: Need to update for later
export const userRegister = register => {
  //doRegister
  let handle = register.username;
  let name = register.name; //Name for user
  let email = register.email; // Email for storage in backend
  let confirm = register.confirm; // This is the secondary email to double check that they are the same on the back end
  let password = register.password;
  let passwordConfirm = register.passwordConfirm;

  return dispatch => {
    return Axios.post(API_URL + "/auth/register", {
      handle,
      name,
      email,
      confirm,
      password,
      passwordConfirm
    }).catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.errors
      });
    });
  };
};

export const createProfile = profile => {
  //Setup and post a profile creation;
};
export const userExists = user => {};

export const userSet = user => dispatch => {
  dispatch({
    type: FETCH_USER,
    payload: user
  });
};

export const fetchProfileByUserId = id => dispatch => {
  console.log("fetchProfileByUserId: ", id);
  Axios.get(API_URL + "/profiles/" + id)
    .then(response => {
      dispatch({
        type: FETCH_USER_ID,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_USERS_ERROR,
        payload: error.message
      });
    });
};

export const userVerify = auth => {
  let id = auth.id;
  let token = "testtoken";
  return dispatch => {
    return Axios.get(API_URL + "/CustomUsers/confirm", {
      params: {
        uid: id,
        token: token
      }
    });
  };
};

export const userLogout = user => dispatch => {
  Axios.post(API_URL + "/CustomUsers/logout").then(
    res => {
      localStorage.removeItem("token");
      localStorage.removeItem("session");
      setAuthorizationToken();

      return dispatch({
        type: USER_LOGOUT,
        payload: {}
      });
    },
    err => {
      console.log("ERROR Contact admin!");
    }
  );
};
