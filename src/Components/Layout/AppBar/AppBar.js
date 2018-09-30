import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { translate, Trans } from 'react-i18next';

//redux
import { connect } from "react-redux";
import { compose, pure } from "recompose";
import { toggleDrawerMobileVisibility } from "../../../Containers/drawer/sync/toggleDrawerMobileVisibility";

//material-ui
import AppBarMUI from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";

// other local imports
import { materializeProps } from "../../../utils/materializeProps";
import { DRAWER_WIDTH } from "../../../constants";

const styles = theme => ({
  appBar: {
    position: "absolute",
    marginLeft: DRAWER_WIDTH,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`
    }
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

const AppBarComponent = ({ classes, theme, toggleDrawerMobileVisibility, t }) => (
  <Fragment>
    <AppBarMUI className={classes.appBar} data-cy="AppBar">
      <Toolbar>
        <IconButton
          data-cy="BurgerButton"
          name="BurgerButton"
          color="inherit"
          aria-label="Open drawer"
          onClick={toggleDrawerMobileVisibility}
          className={classes.navIconHide}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" noWrap>
          {t('responsive_drawer')}
        </Typography>
      </Toolbar>
    </AppBarMUI>
  </Fragment>
);

const propTypes = {
  toggleDrawerMobileVisibility: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  toggleDrawerMobileVisibility
};

const enhance = compose(
  translate(),
  withStyles(styles, { withTheme: true }),
  materializeProps(propTypes),
  connect(
    null,
    mapDispatchToProps
  ),
  pure
);

export const AppBar = enhance(AppBarComponent);
