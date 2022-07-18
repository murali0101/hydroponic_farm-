
import { GET_PRODUCT_DATA } from "./actionTypes";
const initState = {
  product: [],
};

export const ShopPageReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_DATA:
      return { ...state, product: payload };
    default:
      return state;
  }
};
