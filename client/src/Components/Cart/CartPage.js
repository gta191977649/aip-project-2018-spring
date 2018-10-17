import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Col, Row, Card, CardBody, Button } from "mdbreact";
import { Link, withRouter } from "react-router-dom";

import convertCentsToDollars from "../../Utils/convertCentsToDollars";
import isEmpty from "../../Utils/isEmpty";
import { clearCart, saveCart } from "../../Actions/CartActions";
import { createOrder } from "../../Actions/OrderActions";
export class CartPage extends Component {
  static propTypes = {
    cart: PropTypes.object.isRequired
  };

  async clearCart(event) {
    await this.props.clearCart();
    this.props.saveCart(this.props.cart);
  }
  render() {
    const { cart } = this.props;

    let items = cart.items.map((item, index) => (
      <tr key={index}>
        <th scope="row">{index}</th>
        <td>{item.item.name}</td>
        <td>{item.qty}</td>
        <td>${convertCentsToDollars(item.item.price)}</td>
      </tr>
    ));

    let cartBody = (
      <>
        <Row>
          <Col>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price Per Unit</th>
                </tr>
              </thead>
              <tbody>{items}</tbody>
            </table>
          </Col>
        </Row>

        <Row>
          <Col>
            <hr />
            <span className="float-left">
              <Button onClick={e => this.clearCart(e)}>Clear Cart</Button>
            </span>
            <span className="float-right">
              Total: ${convertCentsToDollars(cart.cost)}
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="float-right">
              <Button onClick={e => this.checkout(e)}>Checkout</Button>
            </span>
          </Col>
        </Row>
      </>
    );

    let emptyCart = (
      <Row>
        <Col>
          <Card>
            <CardBody className="text-center">
              Oops, Looks like your cart is empty.{" "}
              <Link to="/products">Click here to shop!</Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );

    return (
      <Container className="mt-custom">
        <Row>
          <Col className="text-center">
            <h1>
              Your cart
              {isEmpty(cart.items) ? " is empty." : "."}
            </h1>
            <hr />
          </Col>
        </Row>
        {!isEmpty(cart.items) ? cartBody : emptyCart}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = {
  clearCart,
  createOrder,
  saveCart
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartPage)
);
