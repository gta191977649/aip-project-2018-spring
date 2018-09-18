import { FETCH_USER, USER_LOGIN, USER_REGISTER } from "./Types";
import Axios from "axios";

export const fetchUser = () => dispatch => {
  // fetch user
};

export const userLogin = auth => dispatch => {
  //doLogin
  let userName = auth.username;
  let password = auth.password;

  console.log(JSON.stringify(auth));
};

export const userRegister = auth => {
  //doRegister
  let userName = auth.name; //For the backend it's nammed username
  let email = auth.email; // For the backend it's named email.
  let password = auth.password;
  let url = "http://localhost:3000/api";

  return dispatch => {
    return  Axios.post(url + "/Users", {
      userName,
      email,
      password,
      emailVerified: true,
      verificationToken: "testtoken"
    });
  };
};

export const userExists = auth => {};

export const userVerify = auth => {
  let id = auth.id;
  let token = "testtoken";
  let url = "http://localhost:3000/api";
  return dispatch => {
    return Axios.get(url + "/Users/confirm", {
      params: {
        uid: id,
        token: token
      }
    });
  };
};
