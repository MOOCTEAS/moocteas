import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSingleHit } from "./sync/selectSingleHit";
import { loadHackerNewsData } from "./async/loadHackerNewsData";

export const withSelectSingle = InnerComponent => {
  class HackerNewsHOC extends Component {
    state = {
      isLoading: true,
      objectID: null,
      single: null
    };

    async componentWillMount() {
      if (this.props.data === null) await this.props.loadHackerNewsData();

      const objectID = this.props.match.params.id.substr(1);
      const single = this.props.data.hits.find(
        element => element.objectID === objectID
      );
      await this.props.selectSingleHit(objectID, single);
      this.setState({ isLoading: false, objectID, single });
    }

    render() {
      const { isLoading, single } = this.state;
      return isLoading ? (
        <div>Loading...</div>
      ) : (
        <InnerComponent single={single} />
      );
    }
  }

  const mapStateToProps = ({ hackerNews }) => ({
    singles: hackerNews.singles,
    data: hackerNews.data
  });

  const mapDispatchToProps = {
    selectSingleHit,
    loadHackerNewsData
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HackerNewsHOC);
};
