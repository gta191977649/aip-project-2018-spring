// @import NPM Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Container,
  Col,
  Row
} from "mdbreact";

// @import Project Components
import { fetchOrdersById } from "../../Actions/OrderActions";
import isEmpty from "../../Utils/isEmpty";
import OrderList from "./OrderList";
// @Name OrderPage
// @Description Provides a little display page to show information for order
export class OrderPage extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    orders: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      currentOrders: [],
      previousOrders: []
    };
  }

  async componentDidMount() {
    await this.props.fetchOrdersById(this.props.auth.user._id);
    this.populateOrders(this.props.orders);
  }

  componentWillReceiveProps(nextProps) {
    this.populateOrders(nextProps.orders);
  }
  // @Name populateOrders
  // @Description generate display for orders
  populateOrders(orders) {
    let currentOrdersBuffer = [];
    let previousOrdersBuffer = [];

    if (!isEmpty(orders)) {
      orders.map((order) => { 
        return (
          order.isCompleted
          ? previousOrdersBuffer.push(order)
          : currentOrdersBuffer.push(order)
        );
      });
    }

    this.setState({
      currentOrders: currentOrdersBuffer,
      previousOrders: previousOrdersBuffer
    });
  }
  // @Name render
  // @Description renders the product component
  render() {
    let { currentOrders, previousOrders } = this.state;
    /*
    let noorders = (
      <Card className="text-center">
        <CardBody>
          <CardTitle>Sorry nothing found</CardTitle>
          <CardText>You currently have no placed orders!</CardText>
        </CardBody>
      </Card>
    );
    */

    return (
      <Container className="mt-custom">
        <Row>
          <Col md="12">
            <h2 className="text-center">Current Orders</h2>
            <OrderList orders={currentOrders} />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md="12">
            <h2 className="text-center">Previous Orders</h2>
            <OrderList orders={previousOrders} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  orders: state.orders.orders
});

const mapDispatchToProps = {
  fetchOrdersById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPage);
