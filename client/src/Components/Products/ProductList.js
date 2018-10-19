// @import NPM Modules
import React, { Component } from "react";
import { Row, Col, Card, CardBody } from "mdbreact";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// @import Project Components
import isEmpty from "../../Utils/isEmpty";
import convertCentsToDollars from "../../Utils/convertCentsToDollars";

// @Name ProductList
// @Description Provides display to show list of product
export default class ProductList extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired
  };

  render() {
    const { products } = this.props;
    let emptyList = (
      <Row>
        <Col>
          <Card>
            <CardBody className="text-center">
              This user has no product for sale
            </CardBody>
          </Card>
        </Col>
      </Row>
    );

    let productList = !isEmpty(products) ? (
      products.products.map((item, index) => (
        <tr>
          <th scope="row">{index}</th>
          <td>{item.name}</td>
          <td>{item.qty}</td>
          <td>${convertCentsToDollars(item.price)}</td>
          <td>
            <Link
              to={"/product/" + item.link}
              className="btn btn-primary float-right"
            >
              View Product
            </Link>
          </td>
        </tr>
      ))
    ) : (
      <tr />
    );

    let listBody = !isEmpty(products.length) ? (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price Per Unit</th>
          </tr>
        </thead>
        <tbody>{productList}</tbody>
      </table>
    ) : (
      emptyList
    );
    return listBody;
  }
}
