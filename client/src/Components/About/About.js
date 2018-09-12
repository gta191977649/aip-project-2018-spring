import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
} from 'mdbreact'



export default class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="6" className="mx-auto">
            <h1 className="display-4 text-center">About Us</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
