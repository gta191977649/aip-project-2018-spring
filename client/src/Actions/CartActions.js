import { CART_ADD, CART_CLEAR, CART_FETCH } from "./Types";
import { toast } from "mdbreact";
import jwt from "jsonwebtoken";

export const addToCart = (product, cart) => dispatch => {
  toast.info("Added product to cart!");
  dispatch({
    type: CART_ADD,
    payload: product
  });
  return dispatch(saveCart(cart));
};

export const clearCart = () => dispatch => {
  toast.info("Cleared your card!");
  dispatch({
    type: CART_CLEAR,
    payload: []
  });
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
