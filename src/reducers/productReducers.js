import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_RESET,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "../constants/productConstants";

export const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return { loading: true };
    case ADD_PRODUCT_SUCCESS:
      return { loading: false, message: action.payload };
    case ADD_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    case ADD_PRODUCT_RESET:
      return {};
    default:
      return state;
  }
};

export const getProductReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { loading: true };
    case GET_PRODUCT_SUCCESS:
      return { loading: false, products: action.payload };
    case GET_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
