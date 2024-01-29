import {
  ADD_ORDER_FAIL,
  ADD_ORDER_REQUEST,
  ADD_ORDER_RESET,
  ADD_ORDER_SUCCESS,
  GET_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
} from "../constants/orderConstants";

export const addOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ORDER_REQUEST:
      return { loading: true };
    case ADD_ORDER_SUCCESS:
      return { loading: false, message: action.payload };
    case ADD_ORDER_FAIL:
      return { loading: false, error: action.payload };
    case ADD_ORDER_RESET:
      return {};
    default:
      return state;
  }
};

export const getOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return { loading: true };
    case GET_ORDER_SUCCESS:
      return { loading: false, orders: action.payload };
    case GET_ORDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
