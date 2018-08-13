import React from "react";
import ReactDOM from "react-dom";

//local imports
import { Root } from "./Router/Root";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./store/store";
import { history } from "./Router/history";
import "./index.css";

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById("root")
);

registerServiceWorker();
