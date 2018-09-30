import React, { Fragment } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

//material-ui
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

//local components
import { withRoutes } from "../../../Containers/routes/withRoutes";
import { HomeShelf } from "./HomeShelf";
import { UserInputShelf } from "./UserInputShelf";
import { LoginShelf } from "./LoginShelf";
import { LogoutShelf } from "./LogoutShelf";
//other local imports
import { materializeProps } from "../../../utils/materializeProps";

const styles = theme => ({
  toolbar: theme.mixins.toolbar
});

const ShelvesComponent = ({ classes, isHomeRoute }) => (
    <Fragment>
      <div className={classes.toolbar} data-cy="Shelves" />
      <Divider />
      <List>{isHomeRoute ? <UserInputShelf /> : <HomeShelf />}</List>
      <Divider />      
      <List><LoginShelf /></List>
      <Divider />
      <List><LogoutShelf /></List>
    </Fragment>
)

const mapStateToProps = () => ({

});

const mapDispatchToProps = {};

const enhance = compose(
  withRoutes,
  withStyles(styles, { withTheme: true }),
  materializeProps(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export const Shelves = enhance(ShelvesComponent);
