import React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";

//material-ui
import { withStyles } from "@material-ui/core/styles";

//local components
import { Page } from "./Page/Page";
import { HiddenDrawer } from "./HiddenDrawer/HiddenDrawer";
import { AppBar } from "./AppBar/AppBar";
import { materializeProps } from "../../utils/materializeProps";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
});

const LayoutComponent = ({ classes, theme, children }: Props) => (
  <div className={classes.root} data-cy="Layout">
    <header>
      <AppBar />
      <HiddenDrawer />
    </header>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Page>{children}</Page>
    </main>
    <footer />
  </div>
);

const propTypes = {
  children: PropTypes.node.isRequired
};

const enhance = compose(
  withStyles(styles, { withTheme: true }),
  materializeProps(propTypes)
);

export const Layout = enhance(LayoutComponent);

export default Layout;
