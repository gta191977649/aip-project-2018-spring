import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Row, Container } from "mdbreact";
export class ProfilePage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="6" className="mx-auto" />
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
)(ProfilePage);
