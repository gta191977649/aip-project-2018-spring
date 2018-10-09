import React from "react";
import {Component} from "react";
import UserOrderItem from './UserOrderItem';
import {fetchOrderByUserId} from "../../../Actions/OrderAction";
import {addOrder} from "../../../Actions/OrderAction";
import connect from "react-redux/es/connect/connect";
import { Button,Collapse } from 'mdbreact'
import {fetchProfileByUserId} from "../../../Actions/AuthActions";

class UserOrders extends Component{
  constructor(props) {
    super(props);
    this.state = {
      orders : [],
    };
    this.fetchSellerProfile = this.fetchSellerProfile.bind(this);
    this.removeData = this.removeData.bind(this);
    this.toogleEdit = this.toogleEdit.bind(this);
    this.fetchOrderData = this.fetchOrderData.bind(this);
  }
  toogleEdit(itemData=null) {
    if(itemData!=null) {
      this.setState({
        isEdit: true,
        targetEditItemData:itemData,
      });
    } else {
      this.setState({
        isEdit: false,
        targetEditItemData:null,
      });
    }

  }

  componentDidMount() {
    //Set fake data
    //console.log(this.state.products);
    this.fetchOrderData(this.props.userID);
    /*
    this.fetchSellerProfile(this.state.orders.userOrders.product.userId);
    */

  }

  fetchSellerProfile(userId){
    console.log("userid ",userId);
    this.props.fetchProfileByUserId(userId);
  }
  fetchOrderData(userId) {
    this.props.fetchOrderByUserId(userId);
  }
  removeData(id) {
    this.setState({
      orders:this.state.orders.filter(item => item.id !== id)
    });
  }
  componentWillReceiveProps(newProps) {
      //console.log(newProps.userOrders);
    this.setState({orders: newProps.userOrders});
  }

  render () {
    let noOrderAlert = null;
    const orderItems = this.state.orders.map((item,idx) =>(
        <UserOrderItem data={item}  parentRemove={this.removeData}  key={idx}/>
    ));
    if(this.state.orders.length === 0) {
      noOrderAlert = <div className="card ">
      <div className="card-body">
          <h3 className="card-title">No Order found</h3>
          <div className="card-text">You don't have any order yet.</div>
      </div>
  </div>
  }
    return(
      <div className="div">
          <h1>My orders <small className="text-info">{this.state.orders.length}</small></h1>
          <hr/>

      {orderItems}
      {noOrderAlert}
      </div>
    );
  }
}
const mapStateToProps = state => ({
    userOrders: state.orders.userOrders,
    userID:state.auth.user.id,
    error: state.products.error,
    errorMsg: state.products.errorMsg,
    seller:state.auth.requesedUserInfo
});
export default connect(mapStateToProps, {fetchOrderByUserId,addOrder})(UserOrders);
