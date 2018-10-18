import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "mdbreact";

export class ServerErrorComponent extends Component {
  render() {
    return (
      <Container classNameName="mt-5">
        <Row classNameName="mt-5">
          <Col md="12">
            <div className="error-template">
              <h1>Oops!</h1>
              <h2>500 Internal Server Error</h2>
              <div className="error-details">
                Sorry, an error has occured, please try again later!
              </div>
              <div className="error-actions">
                <Link to="/" className="btn btn-primary btn-lg">
                  <span className="glyphicon glyphicon-home" />
                  Take Me Home
                </Link>
                <Link to="/help" className="btn btn-default btn-lg">
                  <span className="glyphicon glyphicon-envelope" /> Contact
                  Support
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ServerErrorComponent;
