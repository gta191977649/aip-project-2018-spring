import { CART_ADD, CART_CLEAR } from "./Types";
import { toast } from "mdbreact";

export const addToCart = product => dispatch => {
  toast.info("Added product to cart!");
  return dispatch({
    type: CART_ADD,
    payload: product
  });
};

export const clearCart = history => dispatch => {
  toast.info("Cleared your card!");
  dispatch({
    type: CART_CLEAR,
    payload: []
  });
  history.push("/cart");
};
