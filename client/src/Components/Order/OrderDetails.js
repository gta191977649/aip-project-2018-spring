import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col, Card, CardText, CardTitle } from "mdbreact";

import isEmpty from "../../Utils/isEmpty";

export class OrderDetails extends Component {
  static propTypes = {
    orders: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      order: {}
    };
  }

  componentDidMount() {
    let orderid = this.props.match.params.id;
    if (!isEmpty(orderid)) {
      if (!isEmpty(this.props.orders)) {
        let orders = this.props.orders;

        orders.items.forEach((element, index) => {
          if (element._id === orderid) {
            this.setState({ order: element });
            return;
          }
        });
      }
    }
  }

  render() {
    let { _id, items, isCompleted } = this.state.order;
    let completed = (
      <span className="green-text">
        <b>Completed</b>
      </span>
    );

    let notCompleted = (
      <span className="red-text">
        <b>Not Completed</b>
      </span>
    );
    return (
      <Container className="mt-custom" fluid>
        <Row className="profile-body">
          <Container>
            <Card>
              <CardTitle>
                {_id}
                {isCompleted ? completed : notCompleted}
              </CardTitle>
            </Card>
          </Container>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetails);
