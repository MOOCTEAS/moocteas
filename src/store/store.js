import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";
// import LogRocket from 'logrocket';
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

const middlewares = [thunk, promise, logger];

// if (process.env.REACT_APP_ENV === "development") {
//   middlewares.push(logger);
//   // middlewares.push(LogRocket.reduxMiddleware());
// }

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
export const store = createStoreWithMiddleware(rootReducer);
