import React, { Component } from "react";
import { connect } from "react-redux";
import { loadHackerNewsData } from "./async/loadHackerNewsData";

export const withHackerNews = InnerComponent => {
  class HackerNewsHOC extends Component {
    state = {
      isLoading: true
    };

    async componentWillMount() {
      await this.props.loadHackerNewsData();
      this.setState({ isLoading: false });
    }

    render() {
      console.log(this.props);
      return this.state.isLoading ? (
        <div>loading</div>
      ) : (
        <InnerComponent hits={this.props.data.hits} />
      );
    }
  }

  const mapStateToProps = ({ hackerNews }) => ({
    data: hackerNews.data
  });

  const mapDispatchToProps = {
    loadHackerNewsData
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HackerNewsHOC);
};
