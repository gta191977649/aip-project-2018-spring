// @import NPM Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, withRouter, Route } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem, NavLink, Fa } from "mdbreact";

// @import Project Components
import DashboardHomePage from "./DashboardHomePage";
import BuyingList from "./Buying/BuyingList";
import NewProductForm from "./Selling/NewProductForm";
import ProfileForm from "../Auth/Profile/ProfileForm";
import SellingList from "./Selling/SellingList";

export class DashboardMainPage extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    return (
      <Router>
        <Container className="mt-5" fluid>
          <Row className="pt-5">
            <Col md="2">
              <h3 className="text-center">Dashboard Navigation</h3>
              <hr />
              <Nav pills color="blue" className="flex-column">
                <NavItem>
                  <NavLink to="/dashboard/home">
                    Dashboard Home
                    <Fa icon="dashboard" className="ml-2" />
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/dashboard/newproduct">
                    Post new product
                    <Fa icon="pencil-square-o" className="ml-2" />
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/dashboard/buying">
                    Bought Items
                    <Fa icon="cart-arrow-down" className="ml-2" />
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/dashboard/selling">
                    Your Products
                    <Fa icon="dollar" className="ml-2" />
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/dashboard/settings">
                    Settings
                    <Fa icon="gear" className="ml-2" />
                  </NavLink>
                </NavItem>
              </Nav>
              <hr />
            </Col>
            <Col md="9">
              <Route
                exact
                path="/dashboard/home"
                component={DashboardHomePage}
              />
              <Route
                exact
                path="/dashboard/newproduct"
                component={NewProductForm}
              />
              <Route exact path="/dashboard/buying" component={BuyingList} />
              <Route exact path="/dashboard/selling" component={SellingList} />
              <Route exact path="/dashboard/settings" component={ProfileForm} />
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DashboardMainPage)
);
