import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUser } from "../../Actions/AuthActions";
import { Container, Col, Row } from "mdbreact";
// MOVED CSS -> App.css

export class LandingPage extends Component {
  static propTypes = {
    fetchUser: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container-fluid" id="background">
        <Container>
          <Row>
            <Col md="12">
              <h1 className="text-center">Welcome to AIP Auctions</h1>
            </Col>
          </Row>
        </Container>
      </div>
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
)(LandingPage);
