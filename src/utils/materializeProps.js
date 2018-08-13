import PropTypes from "prop-types";

export const materializeProps = ({
  propTypes,
  defaultProps
} = {}) => component =>
  Object.assign(component, {
    propTypes: {
      ...propTypes,
      classes: PropTypes.object,
      theme: PropTypes.object
    },
    defaultProps: {
      ...defaultProps,
      classes: {},
      theme: {}
    }
  });
