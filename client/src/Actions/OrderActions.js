import Axios from "axios";
import { toast } from "mdbreact";

import { NEW_ORDER } from "../Actions/Types";
import { handleError } from "./ErrorActions";
import { clearCart } from "./CartActions";

const ordersURL = process.env.REACT_APP_API_URL + "/orders" || "/api/orders";

export const fetchOrdersById = id => {};

export const createOrder = (cart, history) => dispatch => {
  Axios.post(ordersURL + "/new", { cart })
    .then(response => {
      if (response.status === 200) {
        dispatch({
          type: NEW_ORDER,
          payload: response.data
        });

        dispatch(clearCart());

        history.push("/checkout/complete");
      }
    })
    .catch(axiosError => handleError(axiosError, dispatch));
};
