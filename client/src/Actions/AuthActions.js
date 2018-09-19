import { FETCH_USER, USER_LOGIN, USER_REGISTER, USER_SET } from "./Types";
import Axios from "axios";
import setAuthorizationToken from "../Utils/AuthorizationToken";
import jwt from 'jsonwebtoken';


const API_URL = "http://localhost:3000/api";

export const fetchUser = () => dispatch => {
  Axios.get(API_URL + "/Users").then(
    response => {
      dispatch({
          type:FETCH_USER,
          payload: response.data
      })
  });
};

export const userLogin = auth =>  dispatch => {
  //doLogin
  let email= auth.email;
  let password = auth.password;
  
  return Axios.post(API_URL + "/Users/login", {
    email,
    password
  }).then(res => {
    const token = res.data.id;
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
    console.log(token);
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

export const userExists = auth => {};

export const userSet = token => dispatch =>{
  return
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
