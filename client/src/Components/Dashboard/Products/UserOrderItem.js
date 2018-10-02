import {Component} from "react";
import  React from 'react';

class UserOrderItem extends Component {
    render() {
        return(
            <div className="card ">

                <div className="card-body">
                    <h3 className="card-title">{this.props.data.id}</h3>
                    <div className="card-text">QTY: {this.props.data.qty}</div>
                    <button className="btn btn-primary float-right">Detail</button>
                </div>
            </div>
        );
    }
}
export default UserOrderItem;