import Axios from "axios";
import { toast } from "mdbreact";

import { FETCH_PRODUCTS, NEW_PRODUCT } from "./Types";
import { handleError } from "./ErrorActions";

const productsURL =
  process.env.REACT_APP_API_URL + "/products" || "/api/products";

export const newProduct = formData => dispatch => {
  return Axios.post(productsURL + "/new", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
    .then(response => {
      return dispatch({
        type: NEW_PRODUCT,
        payload: response.data.product
      });
    })
    .catch(axiosError => handleError(axiosError, dispatch));
};

export const searchProducts = formData => {};

export const fetchProducts = () => dispatch => {
  Axios.get(productsURL)
    .then(result => {
      return dispatch({
        type: FETCH_PRODUCTS,
        payload: result.data
      });
    })
    .catch(axiosError => handleError(axiosError, dispatch));
};
