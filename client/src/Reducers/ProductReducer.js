import * as Type from "../Actions/Types";
import { UPDATE_PRUDUCT } from "../Actions/Types";
const initialState = {
  items: [],
  item: {},
  error: false,
  errorMsg: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case Type.FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload
      }
    case Type.FETCH_PRODUCT_ID:
      return {
        ...state,
        productItem: action.payload
      }
    case Type.SEARCH_PRODUCTS:
      return {
        ...state,
        items: action.payload
      }
    case Type.FETCH_PRODUCT_USER_ID:
      return {
        ...state,
        userItems: action.payload
      }
    case Type.ADD_PRUDUCT:
      return {
        ...state,
        addResponse: action.payload
      }
    case Type.DELETE_PRODUCT:
      return {
        ...state,
        delResponse: action.payload
      }
    case Type.UPDATE_PRUDUCT:
      return {
        ...state,
        updateResponse: action.payload
      }
    case Type.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: true,
        errorMsg: action.payload,
      }
    default: return state;
  }
}
