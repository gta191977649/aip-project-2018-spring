import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import setAuthorizationToken from "./AuthorizationToken";
import jwt from 'jsonwebtoken';
import {userSet} from '../Actions/AuthActions';

export class AuthComponent extends Component {
  static propTypes = {
    userSet: PropTypes.func.isRequired
  }

  componentWillMount(){
    let token = localStorage.token;
    let session = localStorage.session;

    if(localStorage.token){
      console.log("SETUP User")
      setAuthorizationToken(localStorage.token);
      this.props.userSet(jwt.decode(localStorage.session));
    }
  }

  render() {
    return <div/>
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  userSet
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent)
