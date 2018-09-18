import React, { Component } from "react";
import { Container, Row, Col } from "mdbreact";
import RegisterForm from "./RegisterForm";
import { userRegister } from "../../../Actions/AuthActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class RegisterPage extends Component {
  render() {
    const { userRegister } = this.props;
    return (
      <Container>
        <Row>
          <Col md="6" className="mx-auto">
            <RegisterForm userRegister={userRegister} />
          </Col>
        </Row>
      </Container>
    );
  }
}

RegisterPage.propTypes = {
  userRegister: PropTypes.func.isRequired
};

export default connect(null,{ userRegister })(RegisterPage);
