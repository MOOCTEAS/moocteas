import React, { Component } from "react";

export function AsyncComponent(importComponent) {
  class AsyncComponent extends Component {
    state = {
      component: null
    };

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({ component }, () => {
        if (window) {
          window.scrollTo(0, 0);
        }
      });
    }

    render() {
      const Component = this.state.component;

      return Component ? <Component {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
