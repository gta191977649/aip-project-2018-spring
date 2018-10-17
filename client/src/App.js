import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
//MDB
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";
import { ToastContainer } from "mdbreact";

//Components
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import FooterComponent from "./Components/FooterComponent";
import AuthComponent from "./Components/StorageComponents/AuthComponent";
import ProductsComponent from "./Components/StorageComponents/ProductComponent";
import CartComponent from "./Components/StorageComponents/StoreCartComponent";
import OrdersComponent from "./Components/StorageComponents/OrderComponent";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AuthComponent />
            <ProductsComponent />
            <CartComponent />
            <OrdersComponent />
            <ToastContainer
              newestOnTop
              position="bottom-right"
              autoClose={5000}
              draggable
            />
            <Nav />
            <Main />
            <FooterComponent />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
