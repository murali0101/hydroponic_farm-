import axios from "axios";
import { GET_PRODUCT_DATA } from "./actionTypes";
export const addProductData = (payload) => {
  return { type: GET_PRODUCT_DATA, payload };
};

export const getProductData = (toast) => async (dispatch) => {
  try {
    let res = await axios.get("/products");

    dispatch(addProductData(res.data));
  } catch (err) {
    console.log(err.response.data);
    notify(toast, err.response.data.message, "error");
  }
};
