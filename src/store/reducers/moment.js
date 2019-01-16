import { IS_TODAY } from "../types";
import moment from "moment";
import "moment/locale/ru";

const ru = "ru";
moment.locale(ru);

export default function getMomentJS(state = moment(), action) {
  switch (action.type) {
    case IS_TODAY:
      return (state = moment().clone());

    // case "NEXT_MONTH":
    //   return state.clone().add(1, "M");

    // case "PREV_MONTH":
    //   return (state = state.clone().subtract(1, "M"));

    // case "REFRESH_MOMENT":
    //   return (state = moment().clone());

    default:
      break;
  }
  return state;
}
