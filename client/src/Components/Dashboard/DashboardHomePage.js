import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col } from "mdbreact";

export class DashboardHomePage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h1>HOME PAGE</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHomePage);
