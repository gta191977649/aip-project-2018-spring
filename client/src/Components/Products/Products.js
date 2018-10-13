import React, { Component } from "react";
import { Col, Container, Row } from "mdbreact";
import { connect } from "react-redux";

import { fetchProducts } from "../../Actions/ProductAction";
import ProductItem from "./ProductItem";

class Products extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }
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

const mapStateToProps = state => ({
  products: state.products.items,
  error: state.products.error,
  errorMsg: state.products.errorMsg
});
export default connect(
  mapStateToProps,
  { fetchProducts }
)(Products);
