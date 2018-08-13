import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "../Components/Layout/Layout";
import { AsyncComponent } from "./AsyncComponent";
import { HOME_PATH, SINGLE_HIT_PATH } from "../constants";

// public routes
const Main = AsyncComponent(() => import("../Components/Main/Main"));
const SingleHit = AsyncComponent(() =>
  import("../Components/SingleHit/SingleHit")
);
const NotFound404 = AsyncComponent(() =>
  import("../Components/NotFound404/NotFound404")
);

export const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path={HOME_PATH} component={Main} exact />
        <Route path={`${SINGLE_HIT_PATH}:id`} component={SingleHit} exact />
        <Route component={NotFound404} />
      </Switch>
    </Layout>
  );
};
