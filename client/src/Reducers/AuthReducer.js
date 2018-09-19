import { FETCH_USER,USER_LOGIN,USER_REGISTER, USER_VERIFY, USER_EXISTS, USER_SET } from'../Actions/Types';

const initialState = {
  user: {},
  isLoggedIn: false
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_USER:
      return {
        ...state,
        users: action.payload
      }
    
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      } 
    

    case USER_REGISTER:
      return {
        ...state,
        auth: action.payload
      }
    
    case USER_VERIFY:
      return {
        ...state,
        auth: action.payload
      }
    
    case USER_EXISTS:
      return {
        ...state,
        auth: action.payload
      }
    case USER_SET:
      return{
        user: action.user,
        isLoggedIn: true
      }
    default:
      return state;
  }
}