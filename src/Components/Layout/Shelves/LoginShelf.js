import React, { Fragment } from "react";
import { compose } from "recompose";
import { history } from "../../../Router/history";
import { withStyles } from "@material-ui/core/styles";

//material-ui
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { auth } from '../../../rebase.config.js';
import {
  googleAuthenticationProvider,
  facebookAuthenticationProvider,
  twitterAuthenticationProvider
} from "../../../firebase.config.js";

const styles = theme => ({
  title: {
    ...theme.mixins.gutters(),
  }
});

const signInWithRedirect = (provider) => {
  auth.signInWithRedirect(provider);
}

const LoginShelfComponent = ({ classes }) => (
  <Fragment>
    <div className={classes.title}>
      <ListItemText primary="Login with..." />
    </div>
    <ListItem button onClick={() => signInWithRedirect(facebookAuthenticationProvider)} data-cy="LoginShelf">
      <ListItemIcon>
        <ChevronRightIcon />
      </ListItemIcon>
      <ListItemText primary="Facebook" />
    </ListItem>
    <ListItem button onClick={() => signInWithRedirect(googleAuthenticationProvider)} data-cy="LoginShelf">
      <ListItemIcon>
        <ChevronRightIcon />
      </ListItemIcon>
      <ListItemText primary="Google" />
    </ListItem>
    <ListItem button onClick={() => signInWithRedirect(twitterAuthenticationProvider)} data-cy="LoginShelf">
      <ListItemIcon>
        <ChevronRightIcon />
      </ListItemIcon>
      <ListItemText primary="Twitter" />
    </ListItem>
  </Fragment>
);

const enhance = compose(
  withStyles(styles, { withTheme: true } )
);

export const LoginShelf = enhance(LoginShelfComponent);
