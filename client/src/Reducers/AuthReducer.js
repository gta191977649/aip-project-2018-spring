import {
  USER_LOGIN,
  USER_REGISTER,
  USER_VERIFY,
  USER_EXISTS,
  USER_SET,
  FETCH_USER_ID,
  FETCH_USER_STATS
} from "../Actions/Types";
import isEmpty from "../Utils/isEmpty";
const initialState = {
  user: {},
  isLoggedIn: false,
  isErrored: false,
  userstats: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_ID:
      return {
        ...state,
        requesedUserInfo: action.payload
      };
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload
      };

    case USER_REGISTER:
      return {
        ...state,
        auth: action.payload
      };

    case USER_VERIFY:
      return {
        ...state,
        auth: action.payload
      };

    case USER_EXISTS:
      return {
        ...state,
        auth: action.payload
      };
    case USER_SET:
      return {
        ...state,
        isLoggedIn: !isEmpty(action.payload),
        user: action.payload
      };
    case FETCH_USER_STATS:
      return {
        ...state,
        userstats: action.payload
      };
    default:
      return state;
  }
}
