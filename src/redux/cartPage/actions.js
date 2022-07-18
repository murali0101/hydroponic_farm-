import axios from "axios";
import { notify } from "../../utils/extrafunctions";
import { ADD_CART_DATA } from "./actionTypes";
export const addCartData = (payload) => {
  return { type: ADD_CART_DATA, payload };
};
export const addToCartRequest = (payload, token, toast) => async () => {
  try {
    let res = await axios.post(`/cart/${payload}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });

    notify(toast, res.data, "success");
  } catch (err) {
    console.log(err.response.data);
    notify(toast, err.response.data, "error");
  }
};
export const removeToCartRequest =
  (payload, token, toast) => async (dispatch) => {
    try {
      let res = await axios.delete(`/cart/${payload}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(getCartData(token, toast)).then(() => {
        notify(toast, res.data, "success");
      });
    } catch (err) {
      console.log(err);
      notify(toast, err.response.data, "error");
    }
  };
export const getCartData = (token, toast) => async (dispatch) => {
  try {
    let res = await axios.get(`/cart`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(addCartData(res.data));
  } catch (err) {
    console.log(err);
    notify(toast, err.response.data.message, "error");
  }
};
