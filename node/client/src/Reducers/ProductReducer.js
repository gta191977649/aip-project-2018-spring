import * as Type from "../Actions/Types";
const initialState = {
    items: [],
    item: {},
    error:false,
    errorMsg: '',
}

export default function (state = initialState,action) {
    switch (action.type) {
      case Type.FETCH_PRODUCTS:
        return {
          ...state,
          items: action.payload
        }
      case Type.SEARCH_PRODUCTS:
        return {
          ...state,
          items:action.payload
        }
      case Type.FETCH_PRODUCTS_ERROR:
        return{
          ...state,
          error:true,
          errorMsg:action.payload,
        }
      default: return state;
    }
}
