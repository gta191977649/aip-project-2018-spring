import React from "react";
import {Input, Button} from 'mdbreact';
import {Component} from "react";
import {addOrder} from "../../Actions/OrderAction";
import connect from "react-redux/es/connect/connect";
import { withRouter} from 'react-router-dom';

class OrderPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buyItem : {},
			qty:1,
		};
		this.updateDetails = this.updateDetails.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	updateDetails(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		let submitOrder = {
			"qty": this.state.qty,
			"isCompleted": false,
			"time": "2018-10-04T08:18:09.171Z",
			"userId": this.props.userID,
			"productId": this.state.buyItem.id,
			"product": {
				"name": this.state.buyItem.name,
				"price": this.state.buyItem.price,
				"img": this.state.buyItem.img,
				"description": this.state.buyItem.description,
				"userId": this.state.buyItem.userId
			}
		};
		this.props.addOrder(submitOrder);
		this.props.history.push('/dashboard');
	}
	componentDidMount(){
		this.setState({buyItem : this.props.item});
	}

	render() {
		const { qty } = this.state;
		return (
      	<div>
			<div>
				<h1>Your Order</h1>
				<p>item name:</p>
				<p>{this.state.buyItem.name}</p>
				<p>item price:</p>
				<p>{this.state.buyItem.price}</p>
				<p>item des:</p>
				<p>{this.state.buyItem.description}</p>
				<form onSubmit={this.handleSubmit}>
					<input type="number"  name="qty" value={qty} onChange={this.updateDetails}></input>
					<Button type="submit">order</Button>
				</form>
			</div>
		</div>
		)
  	}
}
const mapStateToProps = state => ({
	userID:state.auth.user.id,
	addResponse:state.products.addResponse
})
export default withRouter(connect(mapStateToProps,{addOrder})(OrderPage));