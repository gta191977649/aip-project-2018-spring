//Actions
import { CART_ADD, CART_CLEAR, CART_REMOVE } from "../Actions/Types";

//Util Methods
import isEmpty from "../Utils/isEmpty";

const initialState = {
  items: [],
  cost: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CART_ADD:
      return {
        ...state
      };
    case CART_REMOVE:
      return {
        ...state
      };
    case CART_CLEAR:
      return {
        ...state
      };
    default:
      return state;
  }
}
