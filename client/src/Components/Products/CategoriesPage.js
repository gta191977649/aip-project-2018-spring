import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CATEGORIES } from "../../Utils/Constants";
import { Container, Col, Row } from "mdbreact";
export class CategoriesPage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Container className="mt-5">
        <Row className="pt-5">
          <Col md="12">Hello</Col>
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
)(CategoriesPage);
