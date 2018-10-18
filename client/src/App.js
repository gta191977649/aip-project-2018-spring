import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

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
    const history = createHistory();

    // Dirty Fix to scroll back to top on route changed :D
    history.listen((location, action) => {
      window.scroll(0, 0);
    });

    return (
      <Provider store={store}>
        <Router history={history}>
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
