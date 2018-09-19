import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TestComponent from "./TestComponent";
import { fetchUser } from "../Actions/AuthActions";
import { Container, Col, Row } from "mdbreact";

export class Home extends Component {
  static propTypes = {
    fetchUser: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md="6" className="mx-auto">
            <h1>Welcome to StoreApp</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  fetchUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
