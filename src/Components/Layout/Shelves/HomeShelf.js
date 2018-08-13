import React, { Fragment } from "react";
import { history } from "../../../Router/history";

//material-ui
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";

export const HomeShelf = () => (
  <ListItem button onClick={() => history.push("/")} data-cy="HomeShelf">
    <ListItemIcon>
      <DraftsIcon />
    </ListItemIcon>
    <ListItemText primary="Home" />
  </ListItem>
);
