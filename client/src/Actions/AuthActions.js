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

export const userRegister = auth => dispatch => {
  //doRegister
  let name = auth.name; //For the backend it's nammed username
  let userName = auth.username; // For the backend it's named email.
  let password = auth.password;
  let url = "http://localhost:3000/api";

  Axios.post(url+"/Users", {
    username: name,
    email: userName,
    password: password,
    emailVerified: true,
    verificationToken: "testtoken",
  }).then(response => {
    if(response.status != "200"){
      console.log(response);
    }
    let id = response.data.id;
    let token = "testtoken";
    Axios.get(url+"/Users/confirm",{ params:{
      uid:id,
      token: token
    }}).then(response=>{
      dispatch({
        type:USER_REGISTER,
        payload: response.status
      })
    });
    
  });
};

export const userExists = auth =>{
  
};