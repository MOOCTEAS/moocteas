import React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";

//material-ui
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

//other local imports
import { materializeProps } from "../../../utils/materializeProps";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const PageComponent = ({ classes, children }) => (
  <div data-cy="Page">
    <Paper className={classes.root} elevation={1}>
      {children}
    </Paper>
  </div>
);

const propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

const enhance = compose(
  withStyles(styles, { withTheme: true }),
  materializeProps(propTypes)
);

export const Page = enhance(PageComponent);
