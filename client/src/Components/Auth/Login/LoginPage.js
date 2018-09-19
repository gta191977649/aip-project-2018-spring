import React, { Component } from "react";
import { Container, Row, Col } from "mdbreact";
import LoginForm from "./LoginForm";
import { userLogin } from "../../../Actions/AuthActions";
import { addFlashMessage } from "../../../Actions/FlashActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class LoginPage extends Component {
  render() {
    const { userLogin, addFlashMessage, auth } = this.props;
    return (
      <Container>
        <Row>
          <Col md="6" className="mx-auto">
            <LoginForm
              userLogin={userLogin}
              addFlashMessage={addFlashMessage}
              auth={auth}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

LoginPage.propTypes = {
  userLogin: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth:state.auth
});
const mapDispatchToProps = {
  userLogin,
  addFlashMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
