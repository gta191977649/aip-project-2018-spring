import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
