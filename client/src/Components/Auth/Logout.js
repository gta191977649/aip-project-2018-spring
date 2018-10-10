import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { userLogout } from "../../Actions/AuthActions";
import { addFlashMessage } from "../../Actions/FlashActions";
export class Logout extends Component {
  static propTypes = {
    userLogout: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
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
  userLogout,
  addFlashMessage
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Logout)
);
