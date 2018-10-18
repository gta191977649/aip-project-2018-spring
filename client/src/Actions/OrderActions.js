import Axios from "axios";

import { NEW_ORDER, FETCH_ORDERS } from "../Actions/Types";
import { handleError } from "./ErrorActions";
import { clearCart } from "./CartActions";

const ordersURL = process.env.REACT_APP_API_URL + "/orders" || "/api/orders";

export const fetchOrdersById = id => dispatch => {
  Axios.post(ordersURL + "/", { id })
    .then(response => {
      return response.data;
    })
    .catch(axiosError => handleError(axiosError, dispatch));
};

export const createOrder = cart => dispatch => {
  return Axios.post(ordersURL + "/new", { cart })
    .then(response => {
      if (response.status === 200) {
        dispatch({
          type: NEW_ORDER,
          payload: response.data
        });
        dispatch(clearCart());
      }
    })
    .catch(axiosError => handleError(axiosError, dispatch));
};

export const fetchUsersOrders = id => async dispatch => {
  Axios.post(ordersURL + "/", { id })
    .then(response => {
      return dispatch({
        type: FETCH_ORDERS,
        payload: response.data
      });
    })
    .catch(axiosError => handleError(axiosError, dispatch));
};
