import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { Link } from "react-router-dom";

//material-ui
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

//other local imports
import { withHackerNews } from "../../Containers/hackerNews/withHackerNews";
import { materializeProps } from "../../utils/materializeProps";
import { timeAgo } from "../../utils/timeAgo";
import { SINGLE_HIT_PATH } from "../../constants";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const MainComponent = ({ classes, hits }) => {
  return (
    <div>
      <Paper className={classes.root} elevation={2}>
        <ul>
          {hits.map(hit => {
            return (
              <Link to={`/single-hit:${hit.objectID}`} key={hit.objectID}>
                <li>
                  <Typography variant="headline" component="h3">
                    {hit.title}
                  </Typography>
                  <Typography component="p">
                    {hit.points} points | {hit.author} |{" "}
                    {timeAgo(hit.created_at_1)} | {hit.num_comments} Comments
                  </Typography>
                </li>
              </Link>
            );
          })}
        </ul>
      </Paper>
    </div>
  );
};

const propTypes = {
  classes: PropTypes.object.isRequired,
  hits: PropTypes.array.isRequired
};

const enhance = compose(
  withHackerNews,
  withStyles(styles, { withTheme: true }),
  materializeProps(propTypes)
);

export const Main = enhance(MainComponent);

export default Main;
