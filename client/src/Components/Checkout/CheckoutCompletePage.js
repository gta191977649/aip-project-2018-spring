import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Container, Row, Col } from "mdbreact";

export class CheckoutCompletePage extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row className="mt-5">
          <Col md="12">
            <div class="error-template">
              <h1>Complete</h1>
              <div class="error-details">Your order has been placed!</div>
              <div class="error-actions">
                <a href="/" class="btn btn-primary btn-lg">
                  <span class="glyphicon glyphicon-home" />
                  Back to homepage
                </a>
                <Link to="/orders" class="btn btn-default btn-lg">
                  <span class="glyphicon glyphicon-envelope" /> Your Orders
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(CheckoutCompletePage);
