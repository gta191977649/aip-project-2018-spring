import React, { Component } from "react";
import { Container, Row, Col } from "mdbreact";
import RegisterForm from "./RegisterForm";
import { userRegister } from "../../../Actions/AuthActions";
import { addFlashMessage } from "../../../Actions/FlashActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class RegisterPage extends Component {
  render() {
    const { userRegister, addFlashMessage } = this.props;
    return (
      <Container>
        <Row>
          <Col md="6" className="mx-auto">
            <RegisterForm
              userRegister={userRegister}
              addFlashMessage={addFlashMessage}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

RegisterPage.propTypes = {
  userRegister: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

export default connect(
  null,
  { userRegister, addFlashMessage }
)(RegisterPage);
