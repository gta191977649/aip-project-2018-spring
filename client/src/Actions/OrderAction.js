import axios from "axios";

import {
  ADD_ORDER,
  FETCH_ORDERS,
  UPDATE_ORDER,
  FETCH_ORDER_ID,
  SEARCH_ORDERS,
  FETCH_ORDER_USER_ID,
  FETCH_ORDER_SELLER_ID
} from "./Types";
import { handleError } from "./ErrorActions";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";
const orderRestURI = API_URL + "/orders";

export const fetchOrders = () => dispatch => {
  axios
    .get(orderRestURI)
    .then(response => {
      dispatch({
        type: FETCH_ORDERS,
        payload: response.data
      });
    })
    .catch(axiosError => handleError(axiosError, dispatch));
};

export const fetchOrdersById = id => dispatch => {
  axios
    .get(orderRestURI + "/" + id)
    .then(response => {
      dispatch({
        type: FETCH_ORDER_ID,
        payload: response.data
      });
    })
    .catch(axiosError => handleError(axiosError, dispatch));
};
export const searchOrders = filter => dispatch => {
  axios
    .get(orderRestURI, { params: { filter: filter } })
    .then(response => {
      dispatch({
        type: SEARCH_ORDERS,
        payload: response.data
      });
    })
    .catch(axiosError => handleError(axiosError, dispatch));
};
export const fetchOrderByUserId = userid => dispatch => {
  console.log("Recieved filter:", userid);
  const filter = { where: { userId: userid } };
  axios
    .get(orderRestURI, { params: { filter: filter } })
    .then(response => {
      dispatch({
        type: FETCH_ORDER_USER_ID,
        payload: response.data
      });
    })
    .catch(axiosError => handleError(axiosError, dispatch));
};
export const fetchOrderBySellerId = sellerId => dispatch => {
  const filter = { where: { "product.userId": sellerId } };
  axios
    .get(orderRestURI, { params: { filter: filter } })
    .then(response => {
      dispatch({
        type: FETCH_ORDER_SELLER_ID,
        payload: response.data
      });
    })
    .catch(axiosError => handleError(axiosError, dispatch));
};
export const updateOrder = (orderId, newData) => dispatch => {
  console.log("id", orderId);
  console.log("data", newData);
  axios
    .put(orderRestURI + "/" + orderId, newData)
    .then(response => {
      dispatch({
        type: UPDATE_ORDER,
        payload: response.status
      });
    })
    .catch(axiosError => handleError(axiosError, dispatch));
};

export const addOrder = orderData => dispatch => {
  console.log("Recieved filter:", orderData);
  axios
    .post(orderRestURI, orderData)
    .then(response => {
      dispatch({
        type: ADD_ORDER,
        payload: true
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_ORDER,
        payload: false
      });
    });
};
