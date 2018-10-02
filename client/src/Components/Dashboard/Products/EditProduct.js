import {Component} from "react";
import React from "react";
import {Input, Button} from 'mdbreact';
import {updateProduct} from "../../../Actions/ProductAction";
import {connect} from "react-redux";
import {addFlashMessage} from "../../../Actions/FlashActions";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      price:"",
      description:"",
      img:"",
      id:"",
    }
    this.updateDetails = this.updateDetails.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  UNSAFE_componentWillMount(){
    if(this.props.itemData !== undefined) {
      console.log("data")
      this.setState({
        name: this.props.itemData.name,
        price: this.props.itemData.price,
        description: this.props.itemData.description,
        img: this.props.itemData.img,
        id: this.props.itemData.id,
      });
    }
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
    this.props.updateProduct(this.state.id,product);
    this.props.addFlashMessage({
      type: 'success',
      text: 'You edited the product ID: ' + this.state.id
    });
    this.props.reflashHandle(this.props.userID);
    this.redirectBack();
  }
  redirectBack() {
    this.props.cancelHanlder();
  }
  UNSAFE_componentWillReceiveProps(newProps) {
    console.log("new props",newProps.updateServerState)
    if(newProps.updateServerState ) {
      console.log("SERVER OK")
    }
  }
  render() {
    const { name,price,description,img } = this.state;

    return (
      <div className="container">
        <h1>Edit Product</h1>
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <div className="md-form">
            <Input label="Product Name" className="form-control" name="name" value={name} onChange={this.updateDetails}/>
          </div>
          <div className="md-form">
            <Input label="Price" className="form-control" name="price" value={price} onChange={this.updateDetails}/>
          </div>
          <div className="md-form">
            <Input label="description" className="form-control" name="description" value={description} onChange={this.updateDetails}/>
          </div>
          <div className="md-form">
            <Input label="Img" className="form-control" name="img" value={img} onChange={this.updateDetails}/>
          </div>
          <Button className="btn btn-indigo float-right" type="submit">Update</Button>
          <Button className="btn btn-indigo float-right" type="submit" onClick={()=>{this.redirectBack()}}>Cancel</Button>
        </form>
      </div>
    );
  }

}
const mapStateToProps = state => ({
  userID:state.auth.user.id,
  updateServerState:state.products.updateResponse,
});

export default connect(mapStateToProps,{updateProduct,addFlashMessage})(EditProduct);
