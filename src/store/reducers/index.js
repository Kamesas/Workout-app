import { combineReducers } from "redux";
import getMoment from "./moment";
import values from "./values";
import auth from "./authReducer";

const rootReducer = combineReducers({
  getMoment,
  values,
  auth
});

export default rootReducer;
