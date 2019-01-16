import { combineReducers } from "redux";
import getMoment from "./moment";
import values from "./values";

const rootReducer = combineReducers({
  getMoment,
  values
});

export default rootReducer;
