import React, { Component } from "react";
import { Container, Col, Row, Input, Button } from "mdbreact";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from '../../Actions/AuthActions';
import validator from 'validator';


export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitor: {
        username: '',
        password: ''
      },
      valid: false
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    if(this.state.valid){
      this.props.userLogin(this.state.visitor);
    }
  }

  updateDetails(attr, event){
    const updatedVisitor = Object.assign({}, this.state.visitor);
    if(this.isValid(event.target,attr)){
      //If is valid update details
      updatedVisitor[attr] = event.target.value;
      this.setState({
        visitor: updatedVisitor,
        valid: true
      })
    }
    else{
      this.setState({
        visitor: updatedVisitor,
        valid: false
      })
    }  
  }

  isValid(target, type){
    switch(type){
      case "username":
        return validator.isEmail("" + validator.escape(target.value));   
      case "password":
        return validator.isLength(validator.escape(target.value), {min: 8, max: 24});
      default:
        return "false";
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="6" className="mx-auto">
            <form className='needs-validation' onSubmit={this.submitHandler} noValidate>
              <p className="display-4 h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <Input
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.updateDetails.bind(this,'username')}
                  required
                />
                <Input
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  onChange={this.updateDetails.bind(this,'password')}
                  required
                />
              </div>
              <div className="text-center">
                <Button color="primary" type="submit">Login</Button>
              </div>
              <br/>
              <hr/>
              <div className="text-center">
                <Link to="/register">Click here to register</Link>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(null, { userLogin })(Login);
