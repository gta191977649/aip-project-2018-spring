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
        requesedUserInfo: action.payload,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        error: true,
        errorMsg: action.payload
      };
    case FETCH_USER:
      return {
        ...state,
        users: action.payload
      };

    case USER_LOGIN:
      return {
        ...state,
        user: action.payload
      };

    case USER_ERROR:
      return {
        ...state,
        errors: action.errors,
        isErrored: true
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
    case USER_LOGOUT:
      return { ...state, isLoggedIn: false };
    case USER_SET:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true
      };
    default:
      return state;
  }
}
