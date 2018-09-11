import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

import {updateUser} from './actions/user.actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.onUpdateUser = this.onUpdateUser.bind(this);
    }
    onUpdateUser(event) {
        this.props.onUpdateUser(event.target.value);
    }

  render() {
      console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <input onChange={this.onUpdateUser}/>
          <br/>
          {this.props.user}
      </div>
    );
  }
}
const mapStateToProps = state => ({
    products: state.products,
    user: state.user
})
const mapActionToProps = {
    onUpdateUser:updateUser
}
export default connect(mapStateToProps,mapActionToProps)(App);
