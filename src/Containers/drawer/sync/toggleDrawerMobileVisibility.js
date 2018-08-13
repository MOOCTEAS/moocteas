import { TOGGLE_DRAWER_MOBILE_VISIBILITY } from "../constants";

export const toggleDrawerMobileVisibility = () => (dispatch, getState) => {
  const { isDrawerMobileVisible } = getState().drawer;
  dispatch({
    type: TOGGLE_DRAWER_MOBILE_VISIBILITY,
    payload: !isDrawerMobileVisible
  });
};
