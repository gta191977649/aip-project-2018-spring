import React, { Component } from 'react';
import {connect } from "react-redux";
import {addProduct} from "../../../Actions/ProductAction";
import {Input, Button} from 'mdbreact';
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

	handleSubmit(event) {
	    event.preventDefault();
		const product = {
			"name": this.state.name,
			"price" : this.state.price,
			"description": this.state.description,
			"img":[this.state.img],
			"userId":this.props.userID
		}
		this.props.addProduct(product)
        console.log("Server OK, redirect user");
        return this.props.history.push('/dashboard');
	}
	render() {
		const { name,price,description,img } = this.state;

		return (
			<div className="container mt-4">
				<h1>Add Product</h1>
				<hr/>
				<form onSubmit={this.handleSubmit}>
                    <div className="md-form">
                        <Input label="Product Name" class="form-control" name="name" value={name} onChange={this.updateDetails}/>
                    </div>
                    <div className="md-form">
					    <Input label="Price" class="form-control" name="price" value={price} onChange={this.updateDetails}/>
                    </div>
                    <div className="md-form">
					    <Input label="description" class="form-control" name="description" value={description} onChange={this.updateDetails}/>
                    </div>
                    <div className="md-form">
					    <Input label="Img" class="form-control" name="img" value={img} onChange={this.updateDetails}/>
                    </div>
					<Button className="btn btn-indigo float-right" type="submit">add</Button>
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
