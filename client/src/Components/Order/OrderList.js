// @import NPM Modules
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

// @import Project Components
import isEmpty from "../../Utils/isEmpty";

// @Name OrderList
// @Description Provides display list of orders
export class OrderList extends Component {
  // @Name render
  // @Description renders the product component
  render() {
    let { orders } = this.props;

    let ordersBody = !isEmpty(orders) ? (
      orders.map((order, index) => (
        <tr key={index}>
          <td>{order._id}</td>
          <td>{order.items.length}</td>
          <td>
            <a href={"/order/" + order._id} className="btn btn-primary btn-sm">
              View Details
            </a>
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
    //Returning the component display
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

export default withRouter(OrderList);
