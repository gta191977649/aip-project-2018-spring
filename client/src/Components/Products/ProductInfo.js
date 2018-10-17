import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col } from "mdbreact";

export class ProductInfo extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { image } = this.props.product;
    return (
      <Container className="mt-5" fluid>
        <Row className="pt-5 br-primary profile-header">
          <Container>
            <Row>
              <Col md="12" className="py-3">
                <img src={"https://"} />
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <h1 className="font-weight-boldmt-4 pt-2 text-center">
                  Soemthing
                </h1>
              </Col>
              <Col md="3" className="offset-md-3 text-right" />
            </Row>
          </Container>
        </Row>

        <Row className="profile-body">
          <Container>
            <Row className="mt-2">
              <Col className="text-center">
                <h4>description: </h4>
              </Col>
            </Row>
            <Row>
              <Col>"empty"</Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInfo);
