import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { homePageReducer } from "../homePage/reducer";
import { authReducer } from "../auth/reducer";
const rootReducer = combineReducers({
  homePageReducer,
  authReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
