import Axios from "axios";

import { FETCH_PRODUCTS, NEW_PRODUCT } from "./Types";
import { handleError } from "./ErrorActions";
import {toast} from 'mdbreact';

const productsURL =
  process.env.REACT_APP_API_URL + "/products" || "/api/products";

export const newProduct = (formData, history) => dispatch => {
  return Axios.post(productsURL + "/new", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
    .then(response => {
      if (response.status === 200){
        dispatch({
          type: NEW_PRODUCT,
          payload: response.data.product
        });
        toast.success("Created new product");
        history.push("/product/"+response.data.product.link);
      }
      
    })
    .catch(axiosError => handleError(axiosError, dispatch));
};

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
