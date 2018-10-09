import React from "react";
import { Component } from "react";
import UserSellItem from './UserSellItem';
import {fetchOrderBySellerId } from "../../../Actions/OrderAction";
import { addOrder } from "../../../Actions/OrderAction";
import connect from "react-redux/es/connect/connect";
class UserSells extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
    this.removeData = this.removeData.bind(this);
    this.toogleEdit = this.toogleEdit.bind(this);
    this.fetchOrderSellerData = this.fetchOrderSellerData.bind(this);
  }
  toogleEdit(itemData = null) {
    if (itemData != null) {
      this.setState({
        isEdit: true,
        targetEditItemData: itemData,
      });
    } else {
      this.setState({
        isEdit: false,
        targetEditItemData: null,
      });
    }

  }

  componentDidMount() {
    //Set fake data
    //console.log(this.state.products);
    this.fetchOrderSellerData(this.props.userID);
  }

  fetchOrderSellerData(sellerId) {
    this.props.fetchOrderBySellerId(sellerId);
  }

  removeData(id) {
    this.setState({
      orders: this.state.orders.filter(item => item.id !== id)
    });
  }
  componentWillReceiveProps(newProps) {
    //console.log(newProps.userOrders);
    this.setState({ orders: newProps.sellerOrders });
  }

  render() {
    let noSellsAlert = null
    const orderItems = this.state.orders.map((item, idx) => (
      <div className="col-md-12" key={idx}>
        <UserSellItem data={item} parentRemove={this.removeData} />
      </div>
    ));
    if (this.state.orders.length === 0) {
      noSellsAlert = <div className="card ">
        <div className="card-body">
          <h3 className="card-title">No Sells found</h3>
          <div className="card-text">You don't have any sells yet.</div>
        </div>
      </div>
    }
    return (
      <div className="div">
        <h1>My Sells <small className="text-info">{this.state.orders.length}</small></h1>
        <hr />

        {orderItems}
        {noSellsAlert}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  sellerOrders: state.orders.sellerOrders,
  userID: state.auth.user.id,
  error: state.products.error,
  errorMsg: state.products.errorMsg
});
export default connect(mapStateToProps, { fetchOrderBySellerId, addOrder })(UserSells);
