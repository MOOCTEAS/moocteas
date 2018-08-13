import React, { Fragment } from "react";
import PropTypes from "prop-types";

//redux
import { connect } from "react-redux";
import { compose, onlyUpdateForKeys } from "recompose";
import { toggleDrawerMobileVisibility } from "../../../Containers/drawer/sync/toggleDrawerMobileVisibility";

//material-ui
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core/styles";

//local components
import { Shelves } from "../Shelves/Shelves";

//other local imports
import { materializeProps } from "../../../utils/materializeProps";
import { DRAWER_WIDTH } from "../../../constants";

const styles = theme => ({
  drawerPaper: {
    width: DRAWER_WIDTH,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  }
});

const HiddenDrawerComponent = ({
  classes,
  theme,
  isDrawerMobileVisible,
  toggleDrawerMobileVisibility
}) => (
  <Fragment>
    <Hidden mdUp>
      <Drawer
        data-cy="HiddenDrawer"
        variant="temporary"
        anchor={theme.direction === "rtl" ? "right" : "left"}
        open={isDrawerMobileVisible}
        onClose={toggleDrawerMobileVisibility}
        classes={{
          paper: classes.drawerPaper
        }}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
      >
        <Shelves />
      </Drawer>
    </Hidden>
    <Hidden smDown implementation="css">
      <Drawer
        variant="permanent"
        open
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Shelves />
      </Drawer>
    </Hidden>
  </Fragment>
);

const propTypes = {
  isDrawerMobileVisible: PropTypes.bool.isRequired,
  toggleDrawerMobileVisibility: PropTypes.func.isRequired
};

const mapStateToProps = ({ drawer }) => ({
  isDrawerMobileVisible: drawer.isDrawerMobileVisible
});

const mapDispatchToProps = {
  toggleDrawerMobileVisibility
};

const enhance = compose(
  withStyles(styles, { withTheme: true }),
  materializeProps(propTypes),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  onlyUpdateForKeys(["isDrawerMobileVisible"])
);

export const HiddenDrawer = enhance(HiddenDrawerComponent);
