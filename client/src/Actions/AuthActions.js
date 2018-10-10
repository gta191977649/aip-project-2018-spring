import {
  USER_SET,
  FETCH_USER_ID,
  FETCH_USERS_ERROR,
  GET_ERRORS,
  PROFILE_GET
} from "./Types";
import Axios from "axios";
import setAuthorizationToken from "../Utils/AuthorizationToken";
import { addFlashMessage } from "./FlashActions";
import { isEmpty } from "../Utils/UtilMethods";
import jwt from "jsonwebtoken";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost";

//TODO: Need to update for login.
export const userLogin = (auth, history) => dispatch => {
  //doLogin
  let email = auth.email;
  let password = auth.password;

  return Axios.post(API_URL + "/auth/login", {
    email,
    password
  })
    .then(res => {
      let token = res.data.token;

      //Set User Token For Axios
      localStorage.setItem("token", token);
      setAuthorizationToken(token);
      dispatch(userSet(token));
      dispatch(
        addFlashMessage({
          type: "success",
          text: "Logged in!"
        })
      );

      history.push("/");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.errors
      });
    });
};

// TODO: Need to update for later
export const userRegister = (user, history) => {
  //doRegister
  let handle = user.username;
  let name = user.name; //Name for user
  let email = user.email; // Email for storage in backend
  let confirm = user.confirm; // This is the secondary email to double check that they are the same on the back end
  let password = user.password;
  let passwordConfirm = user.passwordConfirm;

  return dispatch => {
    return Axios.post(API_URL + "/auth/register", {
      handle,
      name,
      email,
      confirm,
      password,
      passwordConfirm
    })
      .then(res => {
        if (res.data.success) {
          history.push("/login");
        }
      })
      .catch(err => {
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

export const userSet = token => dispatch => {
  //If token is not empty decode token else empty string :)
  let decoded = !isEmpty(token) ? jwt.decode(token) : "";

  return dispatch({
    type: USER_SET,
    payload: decoded
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
        type: GET_ERRORS,
        payload: error.response.data.errors
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

export const userLogout = (user, history) => dispatch => {
  //Remove token for logout
  localStorage.removeItem("token");
  // set blank token to auth
  setAuthorizationToken();

  dispatch({
    type: USER_SET,
    payload: {}
  });
  history.push("/login");
};

export const profileGet = handle => {
  return dispatch => {
    return Axios.get(API_URL + "/profiles/" + handle).catch(err => {
      console.log("ERRORED");
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.errors
      });
    });
  };
};

export const profileUpdate = formData => {
  let _id = formData._id;
  let website = formData.website;
  let location = formData.location;
  let description = formData.description;

  return dispatch => {
    return Axios.put(API_URL + "/profiles", {
      _id,
      website,
      location,
      description
    }).catch(err => {
      console.log("ERRORED");
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.errors
      });
    });
  };
};
