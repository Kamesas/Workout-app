import { combineReducers } from "redux";
import getMoment from "./moment";
import values from "./values";
import allValues from "./allValues";
import auth from "./authReducer";

const rootReducer = combineReducers({
  getMoment,
  values,
  allValues,
  auth
});

export default rootReducer;
