import React, { Component } from "react";
import { Container, Row, Col } from "mdbreact";
import RegisterForm from './RegisterForm';
import { userRegister } from "../../../Actions/AuthActions";
import { connect } from "react-redux";
export class RegisterPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="6" className="mx-auto">
            <RegisterForm userRegister ={userRegister} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(null,{ userRegister })(RegisterPage);
