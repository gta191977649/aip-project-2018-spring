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
          <div className="container text-center">
            <h1 className="display-4 text-center">About</h1>
              <hr/>
              <h2>This Project is developed by</h2>
              <p>Idris Dev</p>
              <p>Wenze Jiang</p>
              <p>Le Cai</p>
              <p className="text-info">For <strong>Advanced internet programming Spring 2018</strong></p>
          </div>
        </Row>
      </Container>
    );
  }
}
