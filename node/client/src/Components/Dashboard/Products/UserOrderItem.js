import {Component} from "react";
import  React from 'react';

class UserOrderItem extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div className="card ">

                <div className="card-body">
                    <h3 className="card-title">{this.props.data.id}</h3>
                    <div className="card-text">QTY: {this.props.data.qty}</div>
                    <a href="#" className="btn btn-primary float-right">Detail</a>
                </div>
            </div>
        );
    }
}
export default UserOrderItem;