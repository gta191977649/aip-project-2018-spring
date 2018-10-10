import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  TabPane,
  TabContent,
  Nav,
  NavItem,
  NavLink,
  Fa
} from "mdbreact";
import classnames from "classnames";

//Components
import UserSells from "./Sells/UserSells";
import ProfileForm from "../Auth/Profile/ProfileForm";
import OrderList from "../Order/OrderList";

export class DashboardPage extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);

    this.toggleVerticalPills = this.toggleVerticalPills.bind(this);
    this.state = {
      activeItemVerticalPills: "1"
    };
  }

  toggleVerticalPills(tab) {
    if (this.state.activeItem3 !== tab) {
      this.setState({
        activeItemVerticalPills: tab
      });
    }
  }

  render() {
    return (
      <Router>
        <Container className="mt-5" fluid>
          <Row className="pt-5">
            <Col md="12">
              <Row>
                <Col md="2">
                  <h3 className="text-center">Dashboard Navigation</h3>
                  <hr />
                  <Nav pills color="blue" className="flex-column">
                    <NavItem>
                      <NavLink
                        to="#"
                        className={classnames({
                          active: this.state.activeItemVerticalPills === "1"
                        })}
                        onClick={() => {
                          this.toggleVerticalPills("1");
                        }}
                      >
                        Buying
                        <Fa icon="cart-arrow-down" className="ml-2" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#"
                        className={classnames({
                          active: this.state.activeItemVerticalPills === "2"
                        })}
                        onClick={() => {
                          this.toggleVerticalPills("2");
                        }}
                      >
                        Selling
                        <Fa icon="dollar" className="ml-2" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#"
                        className={classnames({
                          active: this.state.activeItemVerticalPills === "3"
                        })}
                        onClick={() => {
                          this.toggleVerticalPills("3");
                        }}
                      >
                        Settings <Fa icon="gear" className="ml-2" />
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <hr />
                </Col>
                <Col md="9">
                  <TabContent
                    activeItem={this.state.activeItemVerticalPills}
                    className="pt-0"
                  >
                    {/* Orders */}
                    <TabPane tabId="1">
                      <OrderList />
                    </TabPane>
                    {/* Sales */}
                    <TabPane tabId="2">
                      <UserSells />
                    </TabPane>
                    {/* Settings */}
                    <TabPane tabId="3">
                      <ProfileForm />
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
