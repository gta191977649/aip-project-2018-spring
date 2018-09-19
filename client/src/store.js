import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import setAuthorizationToken from "./Utils/AuthorizationToken";

const initialState = {};
const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleWare),
  )
);

setAuthorizationToken(localStorage.jwtToken);
export default store;
