import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LandingSearchForm from "./LandingSearchForm";
import Category from "../Products/Category";
import { Container, Row, Col, Fa, View, Mask, Button } from "mdbreact";
// MOVED CSS -> App.css

export class LandingPage extends Component {
  static propTypes = {};
  render() {
    return (
      <div id="classicformpage" className="mt-0">
        {/* TODO: Implement parrallax */}
        <View className="landingview">
          <Mask
            className="d-flex justify-content-center align-items-center gradient"
            pattern={6}
          >
            <Container className="px-md-3 px-sm-0">
              <Row>
                <Col md="12" className="mb-4 white-text text-center">
                  <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                    {process.env.REACT_APP_NAME}
                  </h3>
                  <hr className="hr-light my-4 w-75" />

                  <LandingSearchForm />
                </Col>
              </Row>
            </Container>
          </Mask>
        </View>

        <Container fluid className="background">
          <hr />
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Product Categories
          </h2>
          <hr />
          <Row>
            <Category
              image="https://i.imgur.com/2Q0ajmo.jpg"
              name="Clothes"
              link="/category/clothes"
            />

            <Category
              image="https://i.imgur.com/CJNKqH5.jpg"
              name="Electronics"
              link="/category/electronics"
            />

            <Category
              image="https://i.imgur.com/syudytV.jpg"
              name="Software"
              link="/category/software"
            />

            <Category
              image="https://i.imgur.com/BjPmYCf.jpg"
              name="Toys"
              link="/category/toys"
            />
          </Row>
        </Container>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
