import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Route, Redirect } from 'react-router-dom';
export class PrivateRoute extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isLoggedIn, children, location, routeProps} = this.props.auth;
    return (
      <Route
        {...routeProps}
        render={() =>
          isLoggedIn ? (
            <div>{children}</div>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
