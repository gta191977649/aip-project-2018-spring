import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {userVerify} from "../../../Actions/AuthActions";
import { Container, Col, Row } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class VerifyPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md="6" className="mx-auto">
            verifying your account now.
          </Col>
        </Row>
      </Container>
    );
  }
}

VerifyPage.propTypes = {
  userVerify: PropTypes.func.isRequired
};

export default 
  connect(
    null,
    { userVerify }
  )(VerifyPage);

