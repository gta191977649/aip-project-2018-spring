import {Component} from "react";
import  React from 'react';
import { Button,Collapse } from 'mdbreact'
import connect from "react-redux/es/connect/connect";
import {addProduct} from "../../../Actions/ProductAction";
import {fetchProfileByUserId} from "../../../Actions/AuthActions";

class UserOrderItem extends Component {
    constructor(props) {
        super(props);
        this.learnMore = this.learnMore.bind(this);
        this.state = {
            openMore:false,
        }
    }
	componentDidMount() {

	}
	componentWillReceiveProps(newprops) {
      console.log("fetched user:",newprops.seller);
  }

    learnMore() {
        this.setState({openMore:!this.state.openMore});
    }
    render() {
        return(
            <div className="card ">

                <div className="card-body">
                    <h3 className="card-title">{this.props.data.product.name}</h3>
                    <div className="card-text">QTY: {this.props.data.qty}</div>
                    <Collapse isOpen={this.state.openMore}>
                        <p>Seller name: {this.props.data.product.userId}</p>
                    </Collapse>
                    <button className="btn btn-primary float-right" onClick={this.learnMore}>Detail</button>
                </div>
            </div>
        );
    }
}
export default UserOrderItem;
