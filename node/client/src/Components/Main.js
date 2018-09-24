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
import PrivateRoute from "./Auth/PrivateRoute";
import Dashboard from './Dashboard/DashboardPage';
import VerifyPage from './Auth/Verify/VerifyPage';
import FlashMessagesList from './Flash/FlashMessagesList';
import SearchPage from './Search/SearchPage';


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
          <Route path="/products" component={Products} />
          <Route path="/verify" component={VerifyPage} />
          <Route path="/search" component={SearchPage} />
          {/* Custom Private Route */}
          <PrivateRoute path="/dashboard" component={Dashboard}/>
        </Switch>
      </main>
    );
  }
}

export default (Main)
