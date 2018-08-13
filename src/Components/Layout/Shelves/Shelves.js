import React, { Fragment, Component } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router";
import isEmpty from "lodash/isEmpty";

//material-ui
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

//local components
import { HomeShelf } from "./HomeShelf";
import { UserInputShelf } from "./UserInputShelf";
//other local imports
import { materializeProps } from "../../../utils/materializeProps";

const styles = theme => ({
  toolbar: theme.mixins.toolbar
});

class ShelvesComponent extends Component {
  state = {
    isLoading: true,
    isHomeRoute: false,
    hasChangedRoute: false
  };
  componentWillMount() {
    const { history, match } = this.props;
    this.setIsHomeRoute(isEmpty(match.params));
    history.listen(location => {
      this.setIsHomeRoute(location.pathname === "/" ? true : false);
    });
  }

  setIsHomeRoute = result => {
    this.setState(({ isHomeRoute }) => ({
      isHomeRoute: result
    }));
  };

  render() {
    const { classes } = this.props;
    const { isHomeRoute } = this.state;
    return (
      <Fragment>
        <div className={classes.toolbar} data-cy="Shelves" />
        <Divider />
        <List>{isHomeRoute ? <UserInputShelf /> : <HomeShelf />}</List>
      </Fragment>
    );
  }
}

const enhance = compose(
  withRouter,
  withStyles(styles, { withTheme: true }),
  materializeProps()
);

export const Shelves = enhance(ShelvesComponent);
