import React, { Component } from "react";
import { connect } from "react-refetch";
import PropTypes from "prop-types";

import Bird from "./Bird";

import Loader from "../helpers/Loader";
import Error from "../helpers/Error";

const API_URL = `https://data.kakadatabase.nz/birds/`;

class Birds extends Component {
  render() {
    const { birdsFetch, ...others } = this.props;

    if (birdsFetch.pending) {
      return <Loader />;
    } else if (birdsFetch.rejected) {
      return <Error message="Error fetching birds" />;
    } else if (birdsFetch.fulfilled) {
      return birdsFetch.value.results.map(bird => (
        <Bird bird={bird} key={bird.id} {...others} />
      ));
    } else return null;
  }
}

Birds.propTypes = {
  type: PropTypes.string.isRequired,
  queryString: PropTypes.string
};

Birds.defaultProps = {
  type: "item"
};

export default connect(props => ({
  birdsFetch: `${API_URL}${props.queryString ? props.queryString : ""}`
}))(Birds);