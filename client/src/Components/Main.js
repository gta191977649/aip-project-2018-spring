import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom';

//Components
import Home from './Home';
import About from './About/About';
import Login from './Auth/Login';
import Register from './Auth/Register';

export class Main extends Component {
  
    render() {
    return (
        <main id="main">
            <Switch>
                <Route exact path='/' component = {Home}/>
                <Route exact path='/about' component = {About}/>
                <Route exact path='/login' component = {Login}/>
                <Route exact path='/register' component = {Register} />
            </Switch>
        </main>
    )
  }
}

export default Main
