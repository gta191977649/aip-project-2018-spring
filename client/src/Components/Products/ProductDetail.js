import React from "react";
import {Carousel, CarouselInner, CarouselItem, Container,Card,CardImage,CardBody,CardTitle,CardText,Button  } from 'mdbreact';
import {Component} from "react";
import {fetchProductById} from "../../Actions/ProductAction";
import {connect} from 'react-redux';

class ProductDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id : null
        }
    }

    componentWillMount () {
        this.setState({id : this.props.match.params});
        this.props.fetchProductById(this.props.match.params);
        console.log("Send Request");
    }
    render() {
        const {name,description,price,img} = this.props.selectProduct;
        let productImgs = null;
        let noImg = null;
        if(img) {
          productImgs = img.map((im, index) => (
            <CarouselItem itemId={index} key={index}>
              <img className="d-block w-100" src={im} alt="First slide"/>
            </CarouselItem>
          ));
        } else {
          noImg = <h1>No img avaiable</h1>;
        }

        return(
            <div className="container">
              <div className="row mt-4">
                <div className="col-md-4">
                  {noImg}
                  <Carousel
                    activeItem={1}
                    length={img ? img.length : 0}
                    showControls={true}
                    showIndicators={true}
                    thumbnails
                    className="z-depth-1">
                    <CarouselInner>
                      {productImgs}
                    </CarouselInner>
                  </Carousel>

                </div>
                <div className="col-md-8">
                  <h1>{name}<hr/></h1>
                  <p>{description}</p>

                  <Card cascade>
                    <CardBody cascade>
                      <p>Price: <strong><span style={{fontSize:25}}>${price}</span></strong></p>
                      <Button className="float-right" href="#">Buy now</Button>
                    </CardBody>
                  </Card>


                </div>

              </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    selectProduct:state.products.productItem
})

export default connect(mapStateToProps,{fetchProductById})(ProductDetail);
