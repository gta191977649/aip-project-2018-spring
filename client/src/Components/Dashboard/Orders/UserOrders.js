import React from "react";
import {Component} from "react";
import UserOrderItem from './UserOrderItem';
import {fetchOrderByUserId, fetchOrderBySellerId} from "../../../Actions/OrderAction";
import {addOrder} from "../../../Actions/OrderAction";
import connect from "react-redux/es/connect/connect";
import { Button,Collapse } from 'mdbreact'

class UserOrders extends Component{
  constructor(props) {
    super(props);
    this.state = {
      orders : [],
    };
    this.removeData = this.removeData.bind(this);
    this.toogleEdit = this.toogleEdit.bind(this);
    this.fetchOrderData = this.fetchOrderData.bind(this);
    this.fetchOrderSellerData = this.fetchOrderSellerData.bind(this);
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
    this.fetchOrderSellerData(this.props.userID);
  }

  fetchOrderSellerData(sellerId){
  	this.props.fetchOrderBySellerId(sellerId);
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
    this.setState({orders: newProps.sellerOrders});
  }

  render () {

    const orderItems = this.state.orders.map((item,idx) =>(
      <div className="col-md-12" key={idx}>

        <UserOrderItem data={item}  parentRemove={this.removeData}/>

      </div>
    ));
    return(
      <div className="div">
          <h1>My orders <small className="text-info">{this.state.orders.length}</small></h1>
          <hr/>

      {orderItems}
      </div>
    );
  }
}
const mapStateToProps = state => ({
    userOrders: state.orders.userOrders,
	sellerOrders: state.orders.sellerOrders,
    userID:state.auth.user.id,
    error: state.products.error,
    errorMsg: state.products.errorMsg
})
export default connect(mapStateToProps, {fetchOrderByUserId,fetchOrderBySellerId,addOrder})(UserOrders);
