import React, { Component } from "react";
//Redux
import {Provider} from 'react-redux'
import store from './store';
//MDB
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";

//Components
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div>
              <Nav />
              <Main />
              <Footer />
            </div>
        </Provider>
    );
  }
}

export default App;
