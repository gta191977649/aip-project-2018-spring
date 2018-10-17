import React, { Component } from "react";

import isEmpty from "../../Utils/isEmpty";

export class OrderList extends Component {
  render() {
    const { orders } = this.props;

    let ordersBody = !isEmpty(orders) ? (
      orders.map((item, index) => (
        <td>
          <tr>{item._id}</tr>
          <tr>{item.items.length}</tr>
          <tr>Adding Order</tr>
        </td>
      ))
    ) : (
      <td>
        <tr>0</tr>
        <tr>No Products</tr>
        <tr>Adding Order</tr>
      </td>
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
