import { combineReducers } from "redux";
import clients from "./clients";
import auth from "./authReducer";

const rootReducer = combineReducers({
  clients,
  auth
});

export default rootReducer;
