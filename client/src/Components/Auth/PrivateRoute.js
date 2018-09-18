import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRouteComponent = (props) => (
  <Route {...props.routeProps} render={() => (
  props.isAuthenticated ? (
      <div>{props.children}</div>
      ) : (
      <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
      }} /> )
  )} />
);

const mapStateToProps = (state, ownProps) => {
  return {
      logged_in: state.auth.logged_in,
      location: ownProps.path,
      routeProps: {
          exact: ownProps.exact,
          path: ownProps.path
      }
  };
};

const PrivateRoute = connect(mapStateToProps, null)(PrivateRouteComponent);
export default PrivateRoute
