import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Home from "./Home";
import About from "./About/About";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Products from "./Products/Products";

export class Main extends Component {
  render() {
    return (
      <main id="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/products" component={Products} />
        </Switch>
      </main>
    );
  }
}

export default Main;