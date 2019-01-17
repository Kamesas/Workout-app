import { FETCH_USER } from "../types";

export default (state = "undefinded user", action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
};
