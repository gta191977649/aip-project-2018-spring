//Node_Module
import React from "react";
import { Col, Container, Row, Footer, Fa } from "mdbreact";
import { Link } from "react-router-dom";

//Created Components
import { CATEGORIES } from "../Utils/Constants";

class FooterComponent extends React.Component {
  render() {
    let categories = CATEGORIES.map((name, i) => (
      <p key={i}>
        <Link to={"/category/" + name}>
          <Fa icon="arrow-right" className="mr-1" /> {name}
        </Link>
      </p>
    ));
    return (
      <Footer className="font-small pt-4 mt-4">
        <Container className="text-center text-md-left">
          <Row className="text-center text-md-left mt-3 pb-3">
            <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                {process.env.REACT_APP_NAME}
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
              {categories}
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <Link to="/dashboard">
                  <Fa icon="user" className="mr-1" />
                  Your Account
                </Link>
              </p>
              <p>
                <Link to="/orders">
                  <Fa icon="list" className="mr-1" />
                  See your orders
                </Link>
              </p>
              <p>
                <Link to="/changepassword">
                  <Fa icon="cog" className="mr-1" />
                  Change Password
                </Link>
              </p>
              <p>
                <Link to="/help">
                  <Fa icon="exclamation-triangle" className="mr-1" />
                  Help
                </Link>
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
            <Col md="6" lg="6">
              <p className="text-center text-md-left white-text">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="/"> AIPAuctions </a>; All Stock Images obtained from{" "}
                <a href="https://pexels.com">Pexels</a>
              </p>
            </Col>
            <Col md="6" lg="6">
              <p className="text-center text-md-right white-text">
                Website created by; <a href="idrisdev.com">Idris</a>, Le Cai and
                Wenze
              </p>
            </Col>
          </Row>
        </Container>
      </Footer>
    );
  }
}

export default FooterComponent;
