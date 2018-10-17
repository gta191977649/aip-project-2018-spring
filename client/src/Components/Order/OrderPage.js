import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Container,
  Col,
  Row,
  Card,
  CardTitle,
  CardBody,
  CardText,
  MDBDataTable
} from "mdbreact";

//Components
import { fetchOrdersById } from "../../Actions/OrderActions";
import isEmpty from "../../Utils/isEmpty";
import OrderList from "./OrderList";

export class OrderPage extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    orders: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      currentOrders: [],
      previousOrders: []
    };
  }

  componentDidMount() {
    let { items } = this.props.orders;
    let currentOrdersBuffer = [];
    let previousOrdersBuffer = [];

    if (!isEmpty(items)) {
      items.map((item, index) => {
        item.isCompleted
          ? previousOrdersBuffer.push(item)
          : currentOrdersBuffer.push(item);
      });
    }

    this.setState({
      currentOrders: currentOrdersBuffer,
      previousOrders: previousOrdersBuffer
    });
  }

  componentWillReceiveProps(nextProps) {
    let { items } = nextProps.orders;
    let currentOrdersBuffer = [];
    let previousOrdersBuffer = [];

    if (!isEmpty(items)) {
      items.map((item, index) => {
        item.isCompleted
          ? previousOrdersBuffer.push(item)
          : currentOrdersBuffer.push(item);
      });
    }

    this.setState({
      currentOrders: currentOrdersBuffer,
      previousOrders: previousOrdersBuffer
    });
  }

  render() {
    let { currentOrders, previousOrders } = this.state;
    let noItems = (
      <Card className="text-center">
        <CardBody>
          <CardTitle>Sorry nothing found</CardTitle>
          <CardText>You currently have no placed orders!</CardText>
        </CardBody>
      </Card>
    );
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
  orders: state.orders
});

const mapDispatchToProps = {
  fetchOrdersById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPage);
