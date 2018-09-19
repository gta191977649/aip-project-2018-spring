import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import setAuthorizationToken from "./Utils/AuthorizationToken";
import jwt from 'jsonwebtoken';
import {userSet} from './Actions/AuthActions';

const initialState = {};
const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleWare),
  )
);

if(localStorage.token){
  setAuthorizationToken(localStorage.token);
  store.dispatch(userSet(jwt.decode(localStorage.session)));
}
export default store;
