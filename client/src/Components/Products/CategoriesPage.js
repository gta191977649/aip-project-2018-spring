import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Col, Row } from "mdbreact";

import isEmpty from "../../Utils/isEmpty";

export class CategoriesPage extends Component {
  render() {
    const { selectedCategory } = this.state;

    let categoryHome = (
      <Container className="mt-5">
        <Row className="pt-5">
          <Col md="12">Hello</Col>
        </Row>
      </Container>
    );
    return categoryHome;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesPage);
