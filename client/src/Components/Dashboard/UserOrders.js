import {Component} from "react";
import  React from 'react';

import UserOrderItem from './Products/UserOrderItem';

class UserOrders extends Component{
    constructor(props) {
        super(props);
        this.state = {
            orders: [
                {"id":"312837192841","qty":3},
                {"id":"328943928749","qty":5}
            ]
        }
    }
    render() {
        const orderItems = this.state.orders.map((item,idx) => (
            <UserOrderItem key={idx} data={item}/>
        ));
        return(
            <div>
                <h1>My orders <hr/></h1>
                {orderItems}
            </div>
        );
    }

}
export default UserOrders;