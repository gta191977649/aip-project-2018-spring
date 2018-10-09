import React, { Component } from "react";
import {
  Container,
  Row,
} from 'mdbreact'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="container">
            <h1 className="display-4 text-center">About</h1>
              <hr/>
              
          </div>
        </Row>
      </Container>
    );
  }
}
