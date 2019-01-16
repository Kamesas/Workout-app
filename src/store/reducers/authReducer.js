import { FETCH_USER } from "../types";

export default (state = "loading", action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
};
