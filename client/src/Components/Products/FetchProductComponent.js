import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchProducts } from "../../Actions/ProductActions";
export class FetchProductComponent extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return <></>;
  }
}

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = {
  fetchProducts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchProductComponent);
