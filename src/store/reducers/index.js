import { combineReducers } from "redux";
import getMoment from "./moment";
import auth from "./authReducer";

const rootReducer = combineReducers({
  getMoment,
  auth
});

export default rootReducer;
