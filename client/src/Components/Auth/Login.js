import React, { Component } from "react";
import { Container, Col, Row, Input, Button } from "mdbreact";
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  async handleClick(e) {}

  async doLogin() {}
  render() {
    return (
      <Container>
        <Row>
          <Col md="6" className="mx-auto">
            <form onSubmit="login()">
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
                />
                <Input
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <Button color="primary">Login</Button>
              </div>
              <div className="text-center">
                <Button color="secondary">Register new Account</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
