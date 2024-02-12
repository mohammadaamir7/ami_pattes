import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const isExist = state.cartItems.find((el) => el._id === item._id);
      if (!isExist) {
        return { ...state, cartItems: [...state.cartItems, item] };
      } else {
        return state;
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id != action.payload),
      };
    default:
      return state;
  }
};
