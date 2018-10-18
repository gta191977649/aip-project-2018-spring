import Axios from "axios";
import { SEARCH_PRODUCTS } from "./Types";
import { handleError } from "./ErrorActions";
import { fetchProducts } from "./ProductActions";
import isEmpty from "../Utils/isEmpty";

const productsURL =
  process.env.REACT_APP_API_URL + "/products" || "/api/products";

export const searchProducts = (filter, history) => dispatch => {
  if (!isEmpty(filter)) {
    const name = filter.name;
    if (!isEmpty(name)) {
      Axios.get(productsURL + "/search", { params: { name: name } })
        .then(response => {
          dispatch({
            type: SEARCH_PRODUCTS,
            payload: response.data
          });
          history.push(`${"/search?name=" + name}`);
        })
        .catch(axiosError => handleError(axiosError, dispatch));
    }
  }
};
