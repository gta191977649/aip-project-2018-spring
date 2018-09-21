import React, { Component } from "react";
//Redux
import { Provider } from "react-redux";
import configureStore from "./store";
import { PersistGate } from "redux-persist/integration/react";
import PropTypes from "prop-types";

//MDB
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";

//Components
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import AuthComponent from "./Utils/AuthComponent";

class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    const {store, persistor } = configureStore();
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthComponent />
          <Nav />
          <Main />
          <Footer />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
