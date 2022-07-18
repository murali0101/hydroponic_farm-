import { ADD_CART_DATA } from "./actionTypes";

const initState = {
  cartProductData: [],
};

export const CartPageReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_CART_DATA:
      return { ...state, cartProductData: payload };
    default:
      return state;
  }
};
