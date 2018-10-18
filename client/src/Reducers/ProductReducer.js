import { NEW_PRODUCT, FETCH_PRODUCTS } from "../Actions/Types";

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_PRODUCT:
      state.products.push(action.payload);
      return {
        ...state
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}
