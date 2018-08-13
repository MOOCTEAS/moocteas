// drawer reducer
import { TOGGLE_DRAWER_MOBILE_VISIBILITY } from "./constants";

const INITIAL_STATE = {
  isDrawerMobileVisible: false
};

export const drawerReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOGGLE_DRAWER_MOBILE_VISIBILITY:
      return {
        isDrawerMobileVisible: payload
      };
    default:
      return state;
  }
};
