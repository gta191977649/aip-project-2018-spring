//Actions
import {
  CART_ADD,
  CART_CLEAR,
  CART_REMOVE,
  CART_FETCH
} from "../Actions/Types";

//Util Methods
import isEmpty from "../Utils/isEmpty";

const initialState = {
  items: [],
  cost: 0,
  itemcount: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CART_ADD:
      let found = false; // Check to see if we added item to cart;
      let product = action.payload;

      //Loop through current items, if item exists increase it's quantity
      state.items.forEach((element, index) => {
        if (element.item.name === product.name) {
          element.qty++;
          found = true;
        }
      });

      //If not found in list push to array
      if (!found) {
        state.items.push({ item: product, qty: 1 });
      }

      //Return dispatch object
      return {
        ...state,
        cost: state.cost + product.price,
        itemcount: state.items.length
      };
    case CART_REMOVE:
      return {
        ...state
      };
    case CART_CLEAR:
      return {
        items: [],
        cost: 0,
        itemcount: 0
      };
    case CART_FETCH:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}
