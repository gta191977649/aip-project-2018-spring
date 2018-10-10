import React, { Component } from "react";
import { Container, Row, Col } from "mdbreact";

export default class About extends Component {
  render() {
    return (
      <Container className="mt-5 text-center">
        <Row className="pt-5">
          <Col md="12">
            <h1 className="display-4 text-center">About</h1>
            <hr />
            <h2>This Project is developed by</h2>
            <p>Idris Dev</p>
            <p>Wenze Jiang</p>
            <p>Le Cai</p>
            <p className="text-info">
              For <strong>Advanced internet programming Spring 2018</strong>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
