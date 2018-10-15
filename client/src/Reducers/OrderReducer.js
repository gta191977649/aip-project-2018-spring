import { NEW_ORDER } from "../Actions/Types";

const initialState = {
  items: [],
  item: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_ORDER:
      return {
        ...state,
        orders: action.payload
      };
    default:
      return state;
  }
}
