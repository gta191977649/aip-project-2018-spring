import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { saveCart, fetchCart } from "../../Actions/CartActions";

export class StoreCartComponent extends Component {
  static propTypes = {
    cart: PropTypes.object.isRequired
  };

  componentDidMount() {
    let cart = localStorage.getItem("cart");
    if (!cart) {
      this.props.saveCart(this.props.cart);
    } else {
      this.props.fetchCart();
    }
  }

  render() {
    return <div className="d-none" />;
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = {
  fetchCart,
  saveCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreCartComponent);
