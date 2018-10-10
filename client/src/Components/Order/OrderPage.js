import React, { Component } from "react";
import OrderList from "./OrderList";
import { Container, Row, Col } from "mdbreact";

export default class OrderPage extends Component {
  render() {
    return (
      <Container className="mt-5">
        <div className="pt-5">
          <OrderList />
        </div>
      </Container>
    );
  }
}
