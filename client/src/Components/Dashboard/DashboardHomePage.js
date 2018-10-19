import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col, Card, CardBody, CardTitle, Fa } from "mdbreact";
import { Line, Bar, Pie } from "react-chartjs-2";

import { fetchUserStats } from "../../Actions/AuthActions";
import convertCentsToDollars from "../../Utils/convertCentsToDollars";
import formatMoney from "../../Utils/formatMoney";

export class DashboardHomePage extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    fetchUserStats: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      numberOfOrders: 0,
      numberOfProducts: 0,
      numberOfSales: 0,
      amountSpent: 0,
      totalMade: 0
    };
  }

  componentDidMount() {
    this.fetchStats();
  }

  componentWillReceiveProps(nextProps) {
    const { userstats } = nextProps.auth;
    this.setState({ ...userstats });
  }

  async fetchStats() {
    await this.props.fetchUserStats();
  }

  handleStats() {}

  render() {
    const {
      numberOfOrders,
      numberOfProducts,
      numberOfSales,
      totalMade,
      amountSpent
    } = this.state;

    const pieData = {
      labels: ["Income $", "Outcome $"],
      datasets: [
        {
          data: [
            convertCentsToDollars(totalMade),
            convertCentsToDollars(amountSpent)
          ],
          backgroundColor: [
            "rgba(54, 162, 235, 0.2)",
            "rgba(75, 192, 192, 0.2)"
          ],
          borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
          borderWidth: 1
        }
      ]
    };

    return (
      <Container>
        <Row>
          <Col md="12">
            <h1>HOME PAGE</h1>
            <hr />
            <Row>
              <Col md="4">
                <Card>
                  <CardBody>
                    <Fa
                      icon="users"
                      size="3x"
                      className="float-left light-blue-text"
                    />
                    <div className="text-right">
                      <h4>Sales</h4>
                      {numberOfSales}
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card>
                  <CardBody>
                    <Fa
                      icon="dollar"
                      size="3x"
                      className="float-left light-green-text"
                    />
                    <div className="text-right">
                      <h4>Purchases</h4>
                      {numberOfOrders}
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card>
                  <CardBody>
                    <Fa
                      icon="shopping-cart"
                      size="3x"
                      className="float-left pink-text"
                    />
                    <div className="text-right">
                      <h4>Products</h4>
                      {numberOfProducts}
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md="12">
                <Card>
                  <CardBody>
                    <CardTitle>Money Spent</CardTitle>
                    <Col md="4">${convertCentsToDollars(amountSpent)}</Col>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md="6">
                <Card>
                  <CardBody>
                    <CardTitle>Purchase</CardTitle>
                    <Col md="4">{numberOfOrders}</Col>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card>
                  <CardBody>
                    <CardTitle>Income vs outcome</CardTitle>
                    <Col md="12">
                      <Pie
                        data={pieData}
                        width={100}
                        height={200}
                        options={{
                          maintainAspectRatio: false
                        }}
                      />
                    </Col>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  fetchUserStats
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHomePage);
