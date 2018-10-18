import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchUsersOrders } from "../../Actions/OrderActions";

export class OrderComponent extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    orders: PropTypes.object.isRequired,
    fetchUsersOrders: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { auth, fetchUsersOrders } = this.props;
    if (auth.isLoggedIn) {
      fetchUsersOrders(auth.user.id);
    }
  }

  render() {
    return <div className="d-none" />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  orders: state.orders
});

const mapDispatchToProps = {
  fetchUsersOrders
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderComponent);
