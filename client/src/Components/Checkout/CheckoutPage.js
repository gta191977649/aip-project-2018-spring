import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { newOrder } from "../../Actions/OrderActions";

export class CheckoutPage extends Component {
  static propTypes = {
    cart: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    newOrder: PropTypes.func.isRequired
  };

  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  auth: state.auth
});

const mapDispatchToProps = {
  newOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);
