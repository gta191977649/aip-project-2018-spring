import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

//MDB
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";

//Components
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";


const store = createStore(() => [], {}, applyMiddleware);
class App extends Component {
  render() {
    return (

        <div>
          <Nav />
          <Main />
          <Footer />
        </div>
    );
  }
}

export default App;
