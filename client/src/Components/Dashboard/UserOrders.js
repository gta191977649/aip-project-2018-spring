import {Component} from "react";
import  React from 'react';

import UserOrderItem from './Products/UserOrderItem';

class UserOrders extends Component{
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }
    render() {
        let noOrderAlert = null;
        const orderItems = this.state.orders.map((item,idx) => (
            <UserOrderItem key={idx} data={item}/>
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
            <div>
                <h1>My orders <hr/></h1>
                {orderItems}
                {noOrderAlert}
            </div>
        );
    }

}
export default UserOrders;