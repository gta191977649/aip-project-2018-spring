import React, { Component } from "react";
import { Row, Col, Card, CardBody } from "mdbreact";
import { Link } from "react-router-dom";

import isEmpty from "../../Utils/isEmpty";
import convertCentsToDollars from "../../Utils/convertCentsToDollars";

export default class ProductList extends Component {
  render() {
    const { products } = this.props;
    console.log(products);
    let emptyList = (
      <Row>
        <Col>
          <Card>
            <CardBody className="text-center">
              No products found for user.
            </CardBody>
          </Card>
        </Col>
      </Row>
    );

    let productList = !isEmpty(products)
      ? products.products.map((item, index) => (
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
      : "";

    let listBody = !isEmpty(products) ? (
      <table class="table">
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
