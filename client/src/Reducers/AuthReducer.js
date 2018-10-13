import {
  FETCH_USER,
  USER_LOGIN,
  USER_REGISTER,
  USER_VERIFY,
  USER_EXISTS,
  USER_SET,
  USER_ERROR,
  USER_LOGOUT,
  FETCH_USER_ID,
  FETCH_USERS_ERROR
} from "../Actions/Types";
import isEmpty from "../Utils/isEmpty";
const initialState = {
  user: {},
  isLoggedIn: false,
  isErrored: false
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
    default:
      return state;
  }
}
