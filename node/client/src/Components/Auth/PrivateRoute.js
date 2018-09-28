import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Route, Redirect } from 'react-router-dom';
export class PrivateRoute extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { auth, location, routeProps, children, component} = this.props;
    return (
      <Route
        {...routeProps}
        render={() =>
          auth.isLoggedIn ? (
            <div>{component}</div>
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
