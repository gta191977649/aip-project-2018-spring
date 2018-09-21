import {FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR} from "../Actions/Types";

const initialState = {
    items: [],
    item: {},
    error:false,
    errorMsg: '',
}

export default function (state = initialState,action) {
    switch (action.type) {
      case FETCH_PRODUCTS:
          return {
              ...state,
              items: action.payload
          }
      case FETCH_PRODUCTS_ERROR:
        return{
          ...state,
          error:true,
          errorMsg:action.payload,
        }
      default: return state;
    }
}
