import { GET_TOKEN_SUCCESS, REMOVE_TOKEN_SUCCESS } from "./actionTypes";
import axios from "axios";
import { deleteKeyFromObject, notify } from "../../utils/extrafunctions";
import { removeItemToLocal, setItemToLocal } from "../../utils/localStorage";

export const getTokenSuccess = (payload) => {
  return { type: GET_TOKEN_SUCCESS, payload };
};

export const removeTokenSuccess = () => {
  return { type: REMOVE_TOKEN_SUCCESS };
};

export const signupRequest = (payload, toast, navigate) => async (dispatch) => {
  try {
    let res = await axios.post("/signup", payload);
    deleteKeyFromObject(res.data.user, "password");
    dispatch(getTokenSuccess(res.data));
    setItemToLocal("token", res.data.token);
    setItemToLocal("user", res.data.user);
    notify(toast, "Account Created Successfully", "success");
    navigate(-2);
  } catch (err) {
    console.log(err.response.data);
    notify(toast, err.response.data.message, "error");
  }
};

export const signInRequest = (payload, toast, navigate) => async (dispatch) => {
  try {
    let res = await axios.post("/signin", payload);
    deleteKeyFromObject(res.data.user, "password");
    dispatch(getTokenSuccess(res.data));
    setItemToLocal("token", res.data.token);
    setItemToLocal("user", res.data.user);
    notify(toast, "SignIn Successfully", "success");
    navigate(-2);
  } catch (err) {
    console.log(err.response.data);
    notify(toast, err.response.data.message, "error");
  }
};

export const signOutRequest = (toast) => (dispatch) => {
  dispatch(removeTokenSuccess());
  removeItemToLocal("token");
  removeItemToLocal("user");
  notify(toast, "SignOut Successfully", "success");
};
