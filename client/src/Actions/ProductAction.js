import axios from "axios";

import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  SEARCH_PRODUCTS,
  FETCH_PRODUCT_ID,
  FETCH_PRODUCT_USER_ID,
  ADD_PRUDUCT,
  DELETE_PRODUCT,
  UPDATE_PRUDUCT
} from "./Types";

//const productRestURI = process.env.API + "Products"; Bug with undefined

const API_URL = process.env.REACT_APP_API_URL || "http://localhost";
const productRestURI = API_URL + "/products";

export const fetchProducts = () => dispatch => {
  axios
    .get(productRestURI)
    .then(response => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: error.message
      });
    });
};

export const fetchProductById = id => dispatch => {
  console.log("url: ", productRestURI);
  axios
    .get(productRestURI + "/" + id)
    .then(response => {
      dispatch({
        type: FETCH_PRODUCT_ID,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: error.message
      });
    });
};

export const searchProducts = filter => dispatch => {
  console.log("Recieved filter:", filter);
  axios
    .get(productRestURI, { params: { filter: filter } })
    .then(response => {
      dispatch({
        type: SEARCH_PRODUCTS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: error.message
      });
    });
};

export const fetchProductByUserId = userid => dispatch => {
  console.log("Recieved filter:", userid);
  const filter = { where: { userId: userid } };
  axios
    .get(productRestURI, { params: { filter: filter } })
    .then(response => {
      dispatch({
        type: FETCH_PRODUCT_USER_ID,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: error.message
      });
    });
};
export const deleteProduct = productId => dispatch => {
  console.log("item for delete= ", productId);

  axios
    .delete(productRestURI + "/" + productId)
    .then(response => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: true
      });
    })
    .catch(error => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: false
      });
    });
};
export const updateProduct = (productId, newData) => dispatch => {
  console.log("id", productId);
  console.log("data", newData);
  axios
    .put(productRestURI + "/" + productId, newData)
    .then(response => {
      dispatch({
        type: UPDATE_PRUDUCT,
        payload: response.status
      });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_PRUDUCT,
        payload: false
      });
    });
};
export const addProduct = productData => dispatch => {
  console.log("Recieved filter:", productData);
  axios
    .post(productRestURI, productData)
    .then(response => {
      dispatch({
        type: ADD_PRUDUCT,
        payload: true
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_PRUDUCT,
        payload: false
      });
    });
};
