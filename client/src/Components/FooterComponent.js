import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterComponent extends React.Component {
  render() {
    return (
      <Footer className="font-small pt-4 mt-4">
        <Container className="text-center text-md-left">
          <Row className="text-center text-md-left mt-3 pb-3">
            <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                AIPAuctions
              </h6>
              <p>
                Bringing you the best products for the cheapest products, by
                People for People.
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Categories
              </h6>
              <p>
                <a href="#!">Clothes</a>
              </p>
              <p>
                <a href="#!">Electronics</a>
              </p>
              <p>
                <a href="#!">Software</a>
              </p>
              <p>
                <a href="#!">More...</a>
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a href="#!">Your Account</a>
              </p>
              <p>
                <a href="#!">See your orders</a>
              </p>
              <p>
                <a href="#!">Change Password</a>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Contact (fake details)
              </h6>
              <p>
                <i className="fa fa-home mr-3" /> 5 Broadway, Ultimo NSW 2007
              </p>
              <p>
                <i className="fa fa-envelope mr-3" /> info@example.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 01 234 567 88
              </p>
            </Col>
          </Row>
          <hr />
          <Row className="d-flex align-items-center">
            <Col md="8" lg="8">
              <p className="text-center text-md-left white-text">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="/"> AIPAuctions </a>; All Stock Images obtained from{" "}
                <a href="https://pexels.com">Pexels</a>
              </p>
            </Col>
            <span>
              Website created by; <a href="idrisdev.com">Idris</a>, Le Cai and
              Wenze
            </span>
          </Row>
        </Container>
      </Footer>
    );
  }
}

export default FooterComponent;
