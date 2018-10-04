import React from "react";
import {Component} from "react";
import UserOrderItem from './UserOrderItem';
import {fetchOrderByUserId} from "../../../Actions/OrderAction";
import {addOrder} from "../../../Actions/OrderAction";
import connect from "react-redux/es/connect/connect";
import {Link} from 'react-router-dom';
import { Button } from 'mdbreact'
class UserOrders extends Component{
  constructor(props) {
    super(props);
    this.state = {

      orders : [
        {
          "id": "testid",
          "productId": "testproductid",
          "qty" : 114514,
          "buyerId": "testbuyerid",
          "isCompleted":false,
          "time": "2018-10-04T06:15:57.080Z"
        }
      ],
    };
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
    let dummyData = {
      "qty": 0,
      "isCompleted": false,
      "time": "2018-10-04T08:18:09.171Z",
      "userId": "string",
      "product": {
        "name": "Test from client",
        "price": 0,
        "img": [
          {}
        ],
        "description": "string",
        "userId": "string"
      }
    }
    this.props.addOrder(dummyData);
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
    this.setState({orders: newProps.userOrders});
    this.setState({reflash: false});
  }

  render () {
    const orderItems = this.state.orders.map((item,idx) =>(
      <div className="col-md-5" key={idx}>
        <UserOrderItem data={item} parentRemove={this.removeData} parentEdit={this.toogleEdit}/>
      </div>
    ));
    return(
      <div className="div">
      {orderItems}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userProducts: state.products.userItems,
  userID:state.auth.user.id,
  error: state.products.error,
  errorMsg: state.products.errorMsg
})
export default connect(mapStateToProps, {fetchOrderByUserId,addOrder})(UserOrders);
