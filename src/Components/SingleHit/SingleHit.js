import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";

//material-ui
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

//other local imports
import { withSelectSingle } from "../../Containers/hackerNews/withSingleHit";
import { materializeProps } from "../../utils/materializeProps";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const SingleHitComponent = ({ classes, single }) => {
  return (
    <Paper className={classes.root} elevation={2}>
      <div>
        <pre>{JSON.stringify(single, null, 2)}</pre>
      </div>
    </Paper>
  );
};

const propTypes = {
  classes: PropTypes.object.isRequired,
  single: PropTypes.object.isRequired
};

const enhance = compose(
  withSelectSingle,
  withStyles(styles, { withTheme: true }),
  materializeProps(propTypes)
);

export const SingleHit = enhance(SingleHitComponent);

export default SingleHit;
