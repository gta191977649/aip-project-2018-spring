import { NEW_PRODUCT } from "../Actions/Types";
const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_PRODUCT:
      return {
        ...state,
        products: state.products.push(action.payload)
      };
    default:
      return state;
  }
}
