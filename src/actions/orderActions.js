import axios from "axios";
import {
  ADD_ORDER_FAIL,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL,
} from "../constants/orderConstants";

export const addOrder =
  (address, country, city, postalCode, countryCode, phoneNumber) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ADD_ORDER_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/orders/addOrder`,
        { address, country, city, postalCode, countryCode, phoneNumber },
        config
      );

      dispatch({
        type: ADD_ORDER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_ORDER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getOrders = () => async (dispatch, getState) => {
  try{
    dispatch({
      type: GET_ORDER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/orders/getOrders`,
      config
    );

    dispatch({
      type: GET_ORDER_SUCCESS,
      payload: data.orders
    })
  }catch(error){
    dispatch({
      type: GET_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
