import { SELECT_SINGLE_HIT } from "../constants";

export const selectSingleHit = (objectID, single) => (dispatch, getState) => {
  dispatch({
    type: SELECT_SINGLE_HIT,
    payload: {
      objectID,
      single
    }
  });
};
