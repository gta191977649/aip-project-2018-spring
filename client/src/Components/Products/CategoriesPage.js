// @import NPM Modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Col, Row } from "mdbreact";
// @Name CategoriesPage
// @Description Provides to show important information of a categories page display categories
export class CategoriesPage extends Component {
  render() {

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
