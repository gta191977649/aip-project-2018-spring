import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Col, Row } from "mdbreact";
export class DashboardPage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="10" className="mx-auto">
            Dashboard Panel Contents
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
)(DashboardPage);
