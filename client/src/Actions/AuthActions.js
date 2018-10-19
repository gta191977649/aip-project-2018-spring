import { toast } from "mdbreact";
import Axios from "axios";
import jwt from "jsonwebtoken";

import { USER_SET, FETCH_USER_ID, FETCH_USER_STATS } from "./Types";
import setAuthorizationToken from "../Utils/AuthorizationToken";
import isEmpty from "../Utils/isEmpty";
import slugify from "../Utils/slugify";

import { handleError } from "./ErrorActions";
import * as Msg from "../Utils/Constants";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

const authUrl = API_URL + "/auth";
const profileURL = API_URL + "/profiles";

//TODO: Need to update for login.
export const userLogin = (auth, history) => dispatch => {
  //doLogin
  let email = auth.email;
  let password = auth.password;

  return Axios.post(authUrl + "/login", {
    email,
    password
  })
    .then(res => {
      let token = res.data.token;

      //Set User Token For Axios
      localStorage.setItem("token", token);
      setAuthorizationToken(token);
      dispatch(userSet(token));
      toast.success("Logged in!");
      history.push("/");
    })
    .catch(axiosError => handleError(axiosError, dispatch));
};

// TODO: Need to update for later
export const userRegister = (user, history) => {
  //doRegister
  let handle = slugify(user.username);
  let fname = user.fname; //Name for user
  let lname = user.lname; //Name for user
  let email = user.email; // Email for storage in backend
  let confirm = user.confirm; // This is the secondary email to double check that they are the same on the back end
  let password = user.password;
  let passwordConfirm = user.passwordConfirm;

  return dispatch => {
    return Axios.post(authUrl + "/register", {
      handle,
      fname,
      lname,
      email,
      confirm,
      password,
      passwordConfirm
    })
      .then(res => {
        if (res.data.success) {
          toast.success(Msg.REGISTER_SECCUESS);
          history.push("/login");
        }
      })
      .catch(axiosError => handleError(axiosError, dispatch));
  };
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
  Axios.get(profileURL + "/" + id)
    .then(response => {
      dispatch({
        type: FETCH_USER_ID,
        payload: response.data
      });
    })
    .catch(axiosError => handleError(axiosError, dispatch));
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

  toast.info(Msg.LOGOUT_SUCCESS);
  history.push("/login");
};

export const profileGet = handle => {
  return dispatch => {
    return Axios.get(profileURL + "/" + handle);
  };
};

export const profileUpdate = formData => {
  let _id = formData._id;
  let website = formData.website;
  let location = formData.location;
  let description = formData.description;

  return dispatch => {
    return Axios.put(profileURL, {
      _id,
      website,
      location,
      description
    }).catch(axiosError => handleError(axiosError, dispatch));
  };
};

export const fetchUserStats = () => dispatch => {
  toast.info('Fetching User Stats');
  
  return Axios.get(authUrl + "/userstats")
    .then(response => {
      return dispatch({
        type: FETCH_USER_STATS,
        payload: response.data
      });
    })
    .catch(axiosError => handleError(axiosError, dispatch));
};
