import { FETCH_VALUES } from "../types";

const initialState = "";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_VALUES:
      return payload;

    default:
      return state;
  }
};
