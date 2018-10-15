import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "mdbreact";

export class ErrorCodeComponent extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row className="mt-5">
          <Col md="12">
            <div class="error-template">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <div class="error-details">
                Sorry, an error has occured, Requested page not found!
              </div>
              <div class="error-actions">
                <Link to="/" class="btn btn-primary btn-lg">
                  <span class="glyphicon glyphicon-home" />
                  Take Me Home
                </Link>
                <Link to="/help" class="btn btn-default btn-lg">
                  <span class="glyphicon glyphicon-envelope" /> Contact Support
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ErrorCodeComponent;
