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
import { fetchOrdersById } from "../../Actions/OrderAction";
import isEmpty from "../../Utils/isEmpty";

export class OrderList extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    orders: PropTypes.object.isRequired
  };

  render() {
    let { items } = this.props.orders;
    let hasItems = !isEmpty(items);
    let itemsData = <MDBDataTable striped bordered hover data={items} />;

    let noItems = (
      <Card className="text-center">
        <CardBody>
          <CardTitle>Sorry nothing found</CardTitle>
          <CardText>You currently have no placed orders!</CardText>
        </CardBody>
      </Card>
    );

    return (
      <div>
        <Row>
          <Col md="12">
            <h2 className="text-center">Current Orders</h2>
            {hasItems ? itemsData : noItems}
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md="12">
            <h2 className="text-center">Previous Orders</h2>
            {hasItems ? itemsData : noItems}
          </Col>
        </Row>
      </div>
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
)(OrderList);
