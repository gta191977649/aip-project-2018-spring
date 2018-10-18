import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchProducts } from "../../Actions/ProductActions";
export class ProductComponent extends Component {
  static propTypes = {
    products: PropTypes.object.isRequired
  };
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return <div className="d-none" />;
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
)(ProductComponent);
