// @import NPM Modules
import { CART_ADD, CART_CLEAR, CART_FETCH } from "./Types";
import { toast } from "mdbreact";
import jwt from "jsonwebtoken";

// @import Project Components
import * as Msg from "../Utils/Constants";

export const addToCart = (product, cart) => dispatch => {
  toast.info(Msg.ADD_ITEM_CART);
  
  dispatch({
    type: CART_ADD,
    payload: product
  });
  return dispatch(saveCart(cart));
};

// @Name: clearCart
// @Dec: clearCart action for further use
export const clearCart = () => dispatch => {
  toast.info(Msg.CLEAR_CART);
  dispatch({
    type: CART_CLEAR,
    payload: []
  });

  const initialCart = {
    items: [],
    cost: 0,
    itemcount: 0
  };

  dispatch(saveCart(initialCart));
};

export const fetchCart = () => dispatch => {
  let cartToken = localStorage.getItem("cart");
  let initialCart = { items: [], cost: 0, itemcount: 0 };

  let cart = jwt.decode(cartToken);
  let expiryTime = cart.exp - cart.iat;
  let timeNow = new Date().valueOf();
  let expiredTime = Math.floor((timeNow - cart.time) / 1000);

  if (expiredTime > expiryTime) {
    localStorage.removeItem("cart");
    return dispatch({
      type: CART_FETCH,
      payload: initialCart
    });
  }
  return dispatch({
    type: CART_FETCH,
    payload: cart.cart
  });
};

export const saveCart = cart => dispatch => {
  // Have to deconstruct cart; and then add one to itemcount to counteract wierd bug.
  const { items, cost, itemcount } = cart;
  let time = new Date().valueOf();
  let cartToken = jwt.sign(
    { cart: { items, cost, itemcount }, time },
    "aipauctions",
    { expiresIn: "30m" }
  );
  localStorage.setItem("cart", cartToken);
  return dispatch(fetchCart);
};
