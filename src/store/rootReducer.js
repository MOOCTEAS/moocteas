import { combineReducers } from "redux";
import { drawerReducer } from "../Containers/drawer/reducer";
import { hackerNewsReducer } from "../Containers/hackerNews/reducer";

export const rootReducer = combineReducers({
  drawer: drawerReducer,
  hackerNews: hackerNewsReducer
});
