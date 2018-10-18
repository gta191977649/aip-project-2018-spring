import { SEARCH_PRODUCTS } from "../Actions/Types";
import isEmpty from "../Utils/isEmpty";

const initialState = {
  items: [],
  isEmpty: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        isEmpty: isEmpty(action.payload)
      };
    default:
      return state;
  }
}
