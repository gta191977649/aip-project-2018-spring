import React from "react";
import { Button } from "mdbreact";
import { Component } from "react";
import { addOrder } from "../../Actions/OrderAction";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchProfileByUserId } from "../../Actions/AuthActions";

class OrderPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buyItem: {},
			qty: 1
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
			qty: this.state.qty,
			isCompleted: false,
			userId: this.props.userID,
			productId: this.state.buyItem.id,
			product: {
				name: this.state.buyItem.name,
				price: this.state.buyItem.price,
				img: this.state.buyItem.img,
				description: this.state.buyItem.description,
				userId: this.state.buyItem.userId
			}
		};
		this.props.addOrder(submitOrder);
		this.props.history.push("/dashboard");
	}
	componentDidMount() {
		this.setState({ buyItem: this.props.item });
	}

	render() {
		const { qty } = this.state;
		return (
			<div className="container mt-4">
				<h1>
					Comfirm Order <small className="text-info">{this.state.buyItem.name}</small>
				</h1>
				<div className="card">
					<h4 className="card-header primary-color white-text">
						<a>Item details</a>

					</h4>
					<div className="card-body">

						<div className="card-text">
							<p>
								Name: <strong>{this.state.buyItem.name}</strong>
							</p>

							<p>Price: ${this.state.buyItem.price}</p>

							<p>Description: {this.state.buyItem.description}</p>
						</div>
					</div>
				</div>
				<div className="card">
					<h4 className="card-header primary-color white-text">Order Amount</h4>
					<div className="card-body">
						<form onSubmit={this.handleSubmit} className="md-form">
							<input
								className="form-control"
								type="number"
								name="qty"
								value={qty}
								onChange={this.updateDetails}
							/>
							<Button className="btn btn-primary float-right" type="submit">comfirm order</Button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	userInfo: state.auth.user,
	userID: state.auth.user.id,
	addResponse: state.products.addResponse,
	sellerInfo: state.auth.requesedUserInfo
});
export default withRouter(
	connect(
		mapStateToProps,
		{ addOrder, fetchProfileByUserId }
	)(OrderPage)
);
