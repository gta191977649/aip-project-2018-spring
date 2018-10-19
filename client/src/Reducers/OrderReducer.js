import { NEW_ORDER, FETCH_ORDERS } from "../Actions/Types";
import isEmpty from "../Utils/isEmpty";

const initialState = {
  orders: [],
  isEmpty: true
};
export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_ORDER:
      let order = action.payload;

      state.orders.push(order);
      return {
        ...state,
        isEmpty: isEmpty(state.orders)
      };
    case FETCH_ORDERS:
      return {
        ...state,
        orders: action.payload,
        isEmpty: isEmpty(action.payload)
      };
    default:
      return state;
  }
}
