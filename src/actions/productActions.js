import axios from "axios";
import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
} from "../constants/productConstants";

export const addProduct = (formData) => async (dispatch, getState) => {
  console.log("pay : ", formData);
  try {
    dispatch({
      type: ADD_PRODUCT_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        // Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/product/addProduct`,
      formData,
      config
    );
    // const { data } = await axios.post(
    //   `${process.env.REACT_APP_BACKEND_URL}/api/product/addProduct`,
    //   payload,
    //   // config
    // );

    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      // payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PRODUCT_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/product/getProduct`
      // config
    );
    console.log('product : ', data)
    return data
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProducts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PRODUCT_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/product/getProducts`
      // config
    );

    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
