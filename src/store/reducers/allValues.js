import { FETCH_ALL_VALUES } from "../types";

const initialState = "";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_VALUES:
      return payload;

    default:
      return state;
  }
};
