import  React from 'react';
import {Component} from "react";
import  { Carousel, CarouselInner, CarouselItem, View, Container } from 'mdbreact';
import connect from "react-redux/es/connect/connect";
import {deleteProduct} from "../../../Actions/ProductAction";

class UserProductItem extends Component{
    constructor(props) {
        super(props);
    }
    deleteProduct(id) {
        this.props.deleteProduct(id);
        this.props.parentRemove(id);
    }
    render() {
        console.log(this.props.data.img);
        const imgItems = this.props.data.img.map((imgUri,idx) =>(
            <CarouselItem itemId={idx+1} key={idx}>
                <View>
                    <img className="d-block w-100" height="170px" src={imgUri} alt={imgUri}/>
                </View>
            </CarouselItem>
        ));
        return(
            <div className="card">
                <Carousel
                    activeItem={1}
                    length={imgItems.length}
                    showControls={true}
                    showIndicators={false}
                    className="z-depth-1">
                    <CarouselInner>
                        {imgItems}
                    </CarouselInner>
                </Carousel>
                    <div className="card-body">
                        <h4 className="card-title"><a>{this.props.data.name}</a></h4>
                        <p className="card-text">{this.props.data.description}</p>
                        <a className="btn btn-sm btn-primary float-right">Manage</a>
                        <a className="btn btn-sm btn-danger float-right" onClick={()=>{this.deleteProduct(this.props.data.id)}}>Delete</a>
                    </div>
            </div>
        );
    }

}
const mapStateToProps = state => ({
    deleteResponse:state.products.delResponse,
    userID:state.auth.user.id
});

export default connect(mapStateToProps,{deleteProduct})(UserProductItem);
