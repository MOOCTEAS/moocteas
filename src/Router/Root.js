import React from "react";
import PropTypes from "prop-types";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Routes } from "./Routes";
import { Authentication } from "../Providers/Authentication";

// import ReactGA from 'react-ga'; //TODO: install google analytics

const RootComponent = ({ store, history }) => {
  return (
    <Provider store={store}>
      <Authentication>
        <Router history={history}>
          <Route path="/" component={Routes} />
        </Router>
      </Authentication>
    </Provider>
  );
};

RootComponent.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export const Root = RootComponent;
