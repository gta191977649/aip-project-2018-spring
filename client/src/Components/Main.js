import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Components
import Home from "./Home";
import About from "./About/About";
import RegisterPage from "./Auth/Register/RegisterPage";
import LoginPage from './Auth/Login/LoginPage'
import Products from "./Products/Products";
import ProductDetail from "./Products/ProductDetail";
import PrivateRoute from "./Auth/PrivateRoute";
import Dashboard from './Dashboard/DashboardPage';
import VerifyPage from './Auth/Verify/VerifyPage';
import FlashMessagesList from './Flash/FlashMessagesList';
import SearchPage from './Search/SearchPage';
import ErrorCodeComponent from './ErrorCodeComponent';
import AddProduct from './Dashboard/Products/AddProduct'
import UserOrderDetails from "./Dashboard/Orders/UserOrderDetails";
export class Main extends Component {
    static propTypes = {
      auth: PropTypes.object.isRequired
    }

    render() {
      const { isLoggedIn } = this.props.auth;
      return (
        <main id="main">
        <FlashMessagesList/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/products/:id" component={ProductDetail} />

          <Route path="/products" component={Products} />
          <Route path="/verify" component={VerifyPage} />
          <Route path="/search" component={SearchPage} />
          <PrivateRoute path="/dashboard" component={Dashboard} isLoggedIn={isLoggedIn}/>
          <PrivateRoute path="/product/add" component={AddProduct} isLoggedIn={isLoggedIn}/>
          <PrivateRoute path="/order/detail/:id" component={UserOrderDetails} isLoggedIn={isLoggedIn}/>


            {/* This is an error component for 404s :) */}
          <Route path='*' exact={true} component={ErrorCodeComponent} />
        </Switch>
      </main>
      )
    }
  }

  const mapStateToProps = (state) => ({
    auth:state.auth
  })

  const mapDispatchToProps = {

  }

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
