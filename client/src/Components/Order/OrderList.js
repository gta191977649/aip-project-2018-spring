import React, { Component } from "react";
import { Link } from "react-router-dom";

import isEmpty from "../../Utils/isEmpty";

export class OrderList extends Component {
  render() {
    let { orders } = this.props;

    let ordersBody = !isEmpty(orders) ? (
      orders.map((item, index) => (
        <tr>
          <td>{item._id}</td>
          <td>{item.items.length}</td>
          <td>
            <Link to={"/order/" + item._id} className="btn btn-primary btn-sm">
              View Details
            </Link>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td>0</td>
        <td>No Products</td>
        <td>No Actions</td>
      </tr>
    );
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Count</th>
            <th>Order Actions</th>
          </tr>
        </thead>
        <tbody>{ordersBody}</tbody>
      </table>
    );
  }
}

export default OrderList;
