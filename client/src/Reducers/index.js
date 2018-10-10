import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import authReducer from "./AuthReducer";
import flashReducer from "./FlashReducer";
import orderReducer from "./OrderReducer";
import errorReducer from "./ErrorReducer";
import cartReducer from "./CartReducer";

export default combineReducers({
  products: productReducer,
  auth: authReducer,
  flashMessages: flashReducer,
  orders: orderReducer,
  errors: errorReducer,
  cart: cartReducer
});
