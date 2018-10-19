// @import NPM Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Row } from "mdbreact";

// @import Project Components
import isEmpty from "../../../Utils/isEmpty";
import ProductList from "../../Products/ProductList";

export class SellingList extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      ownedProducts: []
    };
  }

  async componentDidMount() {
    await this.findProductsOwned();
  }

  async componentWillReceiveProps() {
    await this.findProductsOwned();
  }

  async findProductsOwned() {
    const ownedProductsBuffer = [];

    await this.props.products.forEach(product => {
      let doesMatch = product.seller._id === this.props.auth.user._id;

      if (doesMatch) {
        ownedProductsBuffer.push(product);
      }
    });

    if (!isEmpty(ownedProductsBuffer)) {
      this.setState({ ownedProducts: ownedProductsBuffer });
    }
  }

  render() {
    const { ownedProducts } = this.state;

    return (
      <>
        <Row>
          <Col md="12">
            <h2 className="text-center">Current Orders</h2>
            <ProductList products={ownedProducts} />
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  products: state.products.products
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellingList);
