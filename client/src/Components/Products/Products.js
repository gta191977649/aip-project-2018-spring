import React, { Component } from 'react';
import {Col, Container, Row} from "mdbreact";
import {connect} from 'react-redux';
import  {fetchProducts} from "../../Actions/ProductAction";
import {addFlashMessage} from "../../Actions/FlashActions";
class Products extends Component {
  componentWillMount(){
    this.props.fetchProducts();
  }
  render() {
    const error = this.props.error;
    const errorMsg = this.props.errorMsg;

    const productItems = this.props.products.map(item => (
        <div className="card" key={item.id} >

            <div className="view overlay">
                <a href="">
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>

            <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.description}</p>
                <a href="" className="btn btn-primary float-right">More detail</a>
            </div>

        </div>
    ));
    if(error) {
        this.props.addFlashMessage({
            type: 'error',
            text: 'Product fetch error: ' + errorMsg
        });
    }
    return (
        <Container>
        <h1 className="display-4 text-center">Products</h1>
        {productItems}
        </Container>
    )
  }
}

const mapStateToProps = state => ({
    products:state.products.items,
    error:state.products.error,
    errorMsg:state.products.errorMsg
})
export default connect(mapStateToProps,{fetchProducts,addFlashMessage})(Products);
