import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
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
import AddProduct from "./Dashboard/Products/AddProduct";


export class Main extends Component {
  
  render() {
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
          {/* Custom Private Route */}
          <Route path="/dashboard" component={Dashboard}/>
		  <Route path="/product/add" component={AddProduct}/>
        </Switch>
      </main>
    );
  }
}

export default (Main)
