import { LOAD_HACKER_NEWS_DATA } from "../constants";
import { fetchHackerNewsData } from "../../../api/hacker-news-api";

export const loadHackerNewsData = () => async (dispatch, getState) => {
  if (getState().hackerNews.data !== null) return;
  let hackerNewsData;
  try {
    hackerNewsData = await fetchHackerNewsData();
  } catch (error) {
    throw new Error(error);
  }

  dispatch({
    type: LOAD_HACKER_NEWS_DATA,
    payload: hackerNewsData
  });
};
