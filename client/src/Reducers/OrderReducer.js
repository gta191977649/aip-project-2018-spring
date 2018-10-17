import { NEW_ORDER, FETCH_ORDERS } from "../Actions/Types";
import isEmpty from "../Utils/isEmpty";

const initialState = {
  items: [],
  isEmpty: true
};
export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_ORDER:
      return {
        ...state
      };
    case FETCH_ORDERS:
      return {
        ...state,
        items: action.payload,
        isEmpty: isEmpty(action.payload)
      };
    default:
      return state;
  }
}
