// hackerNews reducer
import { LOAD_HACKER_NEWS_DATA, SELECT_SINGLE_HIT } from "./constants";

const INITIAL_STATE = {
  data: null,
  singles: {}
};

export const hackerNewsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOAD_HACKER_NEWS_DATA:
      return {
        data: payload
      };

    case SELECT_SINGLE_HIT:
      const { objectID, single } = payload;
      return {
        ...state,
        singles: {
          ...state.singles,
          [objectID]: single
        }
      };

    default:
      return state;
  }
};
