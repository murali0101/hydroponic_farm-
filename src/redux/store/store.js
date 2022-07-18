import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { homePageReducer } from "../homePage/reducer";
import { authReducer } from "../auth/reducer";
import { ShopPageReducer } from "../shopPage/reducer";
import { CartPageReducer } from "../cartPage/reducer";
const rootReducer = combineReducers({
  homePageReducer,
  authReducer,
  ShopPageReducer,
  CartPageReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
