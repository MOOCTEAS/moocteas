import React, { Component } from "react";
import { withRouter } from "react-router";
import isEmpty from "lodash/isEmpty";
import { HOME_PATH } from "../../constants";

export const withRoutes = InnerComponent => {
  class withRoutesHOC extends Component {
    state = {
      isHomeRoute: false,
      hasChangedRoute: false
    };

    componentWillMount() {
      const { history, match } = this.props;
      this.setIsHomeRoute(isEmpty(match.params));
      history.listen(location => {
        this.setIsHomeRoute(location.pathname === `${HOME_PATH}` ? true : false);
      });
    }

    setIsHomeRoute = result => {
      this.setState(({ isHomeRoute }) => ({
        isHomeRoute: result
      }));
    };

    render() {
      const {  isHomeRoute } = this.state;
      return <InnerComponent isHomeRoute={isHomeRoute} />
    }
  }

  return withRouter(withRoutesHOC);
};
