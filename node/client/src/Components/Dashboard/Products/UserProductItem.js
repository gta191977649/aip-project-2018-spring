import  React from 'react';
import {Component} from "react";
import  { Carousel, CarouselInner, CarouselItem, View, Container } from 'mdbreact';

class UserProductItem extends Component{
    constructor(props) {
        super(props);
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
                        <a className="btn btn-primary float-right">Manage</a>
                    </div>
            </div>
        );
    }

}
export default UserProductItem;