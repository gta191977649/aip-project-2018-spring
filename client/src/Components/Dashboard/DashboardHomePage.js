import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col, Card, CardBody, CardTitle, Fa } from "mdbreact";
import { Line, Bar, Pie } from "react-chartjs-2";

export class DashboardHomePage extends Component {
  static propTypes = {
    prop: PropTypes
  };
  fakeData = [
    {
      data: {
        labels: ["Jan", "Feb", "Marh", "May", "Jun", "July"],
        datasets: [
          {
            label: "# of Dollars $",
            data: [300, 500, 600, 200, 1400, 30],
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1
          }
        ]
      }
    },
    {
      data: {
        labels: ["Jan", "Feb", "March", "May", "Jun", "July"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1
          }
        ]
      }
    },
    {
      data: {
        labels: ["Income $", "Outcome $"],
        datasets: [
          {
            data: [1200, 4150],
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(75, 192, 192, 0.2)"
            ],
            borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
            borderWidth: 1
          }
        ]
      }
    }
  ];
  render() {
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
                      <h4>Visits</h4>
                      102,400
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
                      9,280
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
                      <h4>Shoppings</h4>
                      13,600
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md="12">
                <Card>
                  <CardBody>
                    <CardTitle>Money Spend</CardTitle>
                    <Col md="12">
                      <Line
                        data={this.fakeData[0].data}
                        width={100}
                        height={300}
                        options={{
                          maintainAspectRatio: false
                        }}
                      />
                    </Col>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md="6">
                <Card>
                  <CardBody>
                    <CardTitle>Purchase</CardTitle>
                    <Col md="12">
                      <Bar
                        data={this.fakeData[1].data}
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
              <Col md="6">
                <Card>
                  <CardBody>
                    <CardTitle>Income vs outcome</CardTitle>
                    <Col md="12">
                      <Pie
                        data={this.fakeData[2].data}
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHomePage);
