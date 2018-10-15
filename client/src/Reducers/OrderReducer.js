import * as Type from "../Actions/Types";

const initialState = {
  items: [],
  item: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case Type.FETCH_ORDERS:
      return {
        ...state,
        orders: action.payload
      };
    case Type.FETCH_ORDER_ID:
      return {
        ...state,
        orderItem: action.payload
      };
    case Type.SEARCH_ORDERS:
      return {
        ...state,
        orders: action.payload
      };
    case Type.FETCH_ORDER_USER_ID:
      return {
        ...state,
        userOrders: action.payload
      };
    case Type.FETCH_ORDER_SELLER_ID:
      return {
        ...state,
        sellerOrders: action.payload
      };
    case Type.ADD_ORDER:
      return {
        ...state,
        addResponse: action.payload
      };
    case Type.UPDATE_ORDER:
      return {
        ...state,
        updateResponse: action.payload
      };
    case Type.FETCH_ORDERS_ERROR:
      return {
        ...state,
        error: true,
        errorMsg: action.payload
      };
    default:
      return state;
  }
}
