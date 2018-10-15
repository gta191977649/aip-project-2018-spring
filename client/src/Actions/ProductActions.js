import Axios from "axios";
import { toast } from "mdbreact";

import { NEW_PRODUCT } from "./Types";
import { handleError } from "./ErrorActions";

//const productRestURI = process.env.API + "Products"; Bug with undefined

const API_URL = process.env.REACT_APP_API_URL || "http://localhost";

export const newProduct = formData => dispatch => {
  console.log("Product Action " + JSON.stringify(formData));
  return Axios.post(API_URL + "/products/new", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }).catch(axiosError => handleError(axiosError, dispatch));
};

export const searchProducts = formData => {};
