import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart =
  (id, quantity, stockQuantity) => async (dispatch, getState) => {
    try {
      // const {
      //   userLogin: { userInfo },
      // } = getState();

      // const config = {
      //   headers: {
      //     "Content-type": "multipart/form-data",
      //     Authorization: `Bearer ${userInfo.token}`,
      //   },
      // };

      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/product/getProduct/${id}`
      );

      dispatch({
        type: CART_ADD_ITEM,
        payload: { ...data, quantity, stockQuantity },
      });

      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (error) {
      // dispatch({
      //   type: ADD_PRODUCT_FAIL,
      //   payload:
      //     error.response && error.response.data.message
      //       ? error.response.data.message
      //       : error.message,
      // });
    }
  };

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
