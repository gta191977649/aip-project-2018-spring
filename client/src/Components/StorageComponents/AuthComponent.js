// @import NPM Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// @import Project Components
import setAuthorizationToken from "../../Utils/AuthorizationToken";
import { userSet } from "../../Actions/AuthActions";
// @Name AuthComponent
// @Description Provide auth for application
export class AuthComponent extends Component {
  static propTypes = {
    userSet: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  componentWillMount() {
    // setup user
    if (localStorage.token) {
      console.log("SETUP User");
      setAuthorizationToken(localStorage.token);
      this.props.userSet(localStorage.token);
    }
  }
  // @Name render
  // @Description renders the auth component
  render() {
    return <div className="d-none" />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  userSet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthComponent);
