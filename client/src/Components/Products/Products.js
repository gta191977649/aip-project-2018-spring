// @import NPM Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Col, Row } from "mdbreact";
// @import Project Components
import Product from "./Product";

// @Name Products
// @Description Provides display to products
export class Products extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired
  };

  render() {
    let products = this.props.products.map((item, i) => (
      <Product key={i} product={item} />
    ));
    return (
      <Container className="mt-custom" fluid>
        <Row>
          <Col>
            <h1 className="text-center">Available Products</h1>
            <hr />
          </Col>
        </Row>
        <Row>{products}</Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
