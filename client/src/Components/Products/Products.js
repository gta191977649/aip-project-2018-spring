import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Col, Row } from "mdbreact";

export class Products extends Component {
  static propTypes = {};

  render() {
    return (
      <Container className="mt-5">
        <Row className="pt-5">
          <Col md="12" className="mx-auto">
            <h1 className="display-4 text-center">Products</h1>
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
)(Products);
