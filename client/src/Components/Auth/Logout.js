import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { userLogout } from "../../Actions/AuthActions";

export class Logout extends Component {
  static propTypes = {
    userLogout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  componentDidMount() {
    this.props.userLogout(this.props.auth.user, this.props.history);
  }
  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = {
  userLogout
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Logout)
);
