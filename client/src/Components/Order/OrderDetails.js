// @import NPM Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Card,
  CardText,
  CardTitle,
  CardBody
} from "mdbreact";
// @import Project Components
import isEmpty from "../../Utils/isEmpty";
import OrderProductList from "./OrderProductList";

// @Name OrderDetails
// @Description Provides display to show one order detail
export class OrderDetails extends Component {
  static propTypes = {
    orders: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      items: [],
      isCompleted: false
    };
  }
  // @Name findOrder
  // @Description filt orders
  async findOrder(orders, link) {
    console.log("find order")
    if (!isEmpty(link)) {
      const order = await orders.find(order => order.link === link);
      if (!isEmpty(order)) {
        this.setState({ ...order });
      }
    }
  }
  componentDidMount() {
    let orderid = this.props.match.params.id;
    if (!isEmpty(orderid)) {
      if (!isEmpty(this.props.orders)) {
        let orders = this.props.orders;

        orders.forEach((element, index) => {
          if (element._id === orderid) {
            this.setState({ ...element });
            return;
          }
        });
      }
    }
  }

  // TODO: Improve (if you can if not just delete this comment) figure out why sometimes the id does not show
  // Does the exact same thing as the component did mount function
  componentWillReceiveProps(nextProps) {
    let orderid = nextProps.match.params.id;
    if (!isEmpty(orderid)) {
      if (!isEmpty(nextProps.orders)) {
        let orders = nextProps.orders;

        orders.forEach((element, index) => {
          if (element._id === orderid) {
            this.setState({ ...element });
            return;
          }
        });
      }
    }
  }
  // @Name render
  // @Description renders the orderDetail component
  render() {
    let { _id, items, isCompleted } = this.state;
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
    //Returning the component display
    return (
      <Container className="mt-custom" fluid>
        <Row className="profile-body">
          <Container>
            <Card>
              <CardBody className="p-5">
                <CardTitle className="">
                  <span className="float-left ml-5">Order ID: {_id}</span>
                  <span className="float-right mr-5">
                    Status: {isCompleted ? completed : notCompleted}
                  </span>
                  <br />
                  <hr />
                </CardTitle>
                <CardText>Products:</CardText>

                <OrderProductList orderitems={items} />
              </CardBody>
            </Card>
          </Container>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders.orders
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetails);
