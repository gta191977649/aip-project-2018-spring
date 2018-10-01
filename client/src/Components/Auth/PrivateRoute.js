import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isLoggedIn===true
        ? <Component {...props} />
        : <Redirect to='/login'/>
    )}
  />
);

export default withRouter(PrivateRoute);