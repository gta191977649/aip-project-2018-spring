import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem, NavLink, Fa } from "mdbreact";

//Components
import ProfileForm from "../Auth/Profile/ProfileForm";
import DashboardHomePage from "./DashboardHomePage";
import OrderList from "../Order/OrderList";
import isEmpty from "../../Utils/isEmpty";

export class DashboardPage extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      activeItem: ""
    };
  }

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
                  <NavLink to="/dashboard/buying">
                    Buying
                    <Fa icon="cart-arrow-down" className="ml-2" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/dashboard/selling">
                    Selling
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
              <Switch>
                <Route
                  exact
                  path="/dashboard/home"
                  component={DashboardHomePage}
                />
                <Route exact path="/dashboard/buying" component={OrderList} />
                <Route
                  exact
                  path="/dashboard/selling"
                  component={ProfileForm}
                />
                <Route
                  exact
                  path="/dashboard/settings"
                  component={ProfileForm}
                />
              </Switch>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
