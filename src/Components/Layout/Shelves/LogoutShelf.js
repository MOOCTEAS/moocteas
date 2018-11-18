import React, { Fragment } from "react";
import { history } from "../../../Router/history";

//material-ui
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { auth } from '../../../rebase.config.js';

export const LogoutShelf = () => (
  <ListItem button onClick={() => {
    auth.signOut();
  }} data-cy="LogoutShelf">
    <ListItemIcon>
      <ChevronLeftIcon />
    </ListItemIcon>
    <ListItemText primary="Logout" />
  </ListItem>
);
