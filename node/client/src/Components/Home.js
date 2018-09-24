import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUser } from "../Actions/AuthActions";
import { Container, Col, Row } from "mdbreact";
import SearchPage from './Search/SearchPage';
import  './style.css';

export class Home extends Component {
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
          <div className="searchArea">
          <Row>
            <Col md="12">
              <h1 className="text-center">Welcome to StoreApp</h1>
                <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                <SearchPage/>
                </div>
                <div className="col-md-1"></div>
                </div>
            </Col>
          </Row>
          </div>
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
)(Home);
