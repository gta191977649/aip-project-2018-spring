import { FETCH_USER, USER_SET, USER_ERROR } from "./Types";
import Axios from "axios";
import setAuthorizationToken from "../Utils/AuthorizationToken";
import jwt from "jsonwebtoken";

const API_URL = "http://localhost:3000/api";

export const fetchUser = () => dispatch => {
  Axios.get(API_URL + "/Users").then(response => {
    dispatch({
      type: FETCH_USER,
      payload: response.data
    });
  });
};

export const userLogin = auth => dispatch => {
  //doLogin
  let email = auth.email;
  let password = auth.password;

  return Axios.post(API_URL + "/Users/login", {
    email,
    password
  })
    .then(res => {
      let jwtToken = "";
      let ttl = res.data.ttl;
      let accessToken = res.data.id;

      //Set User Token For Axios
      const token = accessToken;
      localStorage.setItem("token", token);
      setAuthorizationToken(token);

      //Create JWT for later :)
      Axios.get(API_URL + "/Users/" + res.data.userId).then(res => {
        jwtToken = jwt.sign(
          {
            exp: ttl,
            data: res.data
          },
          "storeappsecur3"
        );
        localStorage.setItem("session", jwtToken);
        dispatch({
          type: USER_SET,
          user: res.data
        });
      });
    })
    .catch(err => {
      dispatch({
        type: USER_ERROR,
        errors: err.response.data
      });
    });
};

export const userRegister = auth => {
  //doRegister
  let userName = auth.name; //For the backend it's nammed username
  let email = auth.email; // For the backend it's named email.
  let password = auth.password;

  return dispatch => {
    return Axios.post(API_URL + "/Users", {
      userName,
      email,
      password,
      emailVerified: true,
      verificationToken: "testtoken"
    });
  };
};

export const userExists = user => {};

export const userSet = user => {
  return dispatch => {
    type: USER_SET, user;
  };
};

export const userVerify = auth => {
  let id = auth.id;
  let token = "testtoken";
  return dispatch => {
    return Axios.get(API_URL + "/Users/confirm", {
      params: {
        uid: id,
        token: token
      }
    });
  };
};
