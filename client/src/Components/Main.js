import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Home from "./Home";
import About from "./About/About";
import Login from "./Auth/Login/Login";
import RegisterPage from "./Auth/Register/RegisterPage";
import Products from "./Products/Products";
import PrivateRoute from "./Auth/PrivateRoute";
import Dashboard from './Dashboard/DashboardPage';
import VerifyPage from './Auth/Verify/VerifyPage';
import FlashMessagesList from './Flash/FlashMessagesList';
export class Main extends Component {
  render() {
    return (
      <main id="main">
        <FlashMessagesList/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/products" component={Products} />
          <Route path="/verify" component={VerifyPage} />
          {/* Custom Private Route */}
          <PrivateRoute path="/dashboard" component={Dashboard}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
