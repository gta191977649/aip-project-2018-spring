import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {addProduct} from "../../../Actions/ProductAction";
import {Link} from 'react-router-dom';
import validator from "validator";

export class AddProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name:"",
			price:"",
			description:"",
			img:""
		}
		this.updateDetails = this.updateDetails.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateDetails(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit() {
		const product = {
			"name": this.state.name,
			"price" : this.state.price,
			"description": this.state.description,
			"img":[this.state.img],
			"userId":this.props.userID
		}
		this.props.addProduct(product)
	}
	render() {
		const { name,price,description,img } = this.state;

		return (
			<div>
				<h1>Add Product</h1>
				<hr/>
				<form onSubmit={this.handleSubmit}>
					<label>name:</label>
					<input name="name" value={name} onChange={this.updateDetails}></input>
					<label>price:</label>
					<input name="price" value={price} onChange={this.updateDetails}></input>
					<label>description:</label>
					<input name="description" value={description} onChange={this.updateDetails}></input>
					<label>img:</label>
					<input name="img" value={img} onChange={this.updateDetails}></input>
					<button type="submit">add</button>
				</form>
		  	</div>
		)
  	}
}

const mapStateToProps = state => ({
	userID:state.auth.user.id,
	addResponse:state.products.addResponse
})

export default connect(mapStateToProps, {addProduct}) (AddProduct)
