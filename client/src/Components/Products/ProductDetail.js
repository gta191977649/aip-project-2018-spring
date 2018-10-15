import { React, Component } from "react";
import { connect } from "react-redux";
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  Container,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Input
} from "mdbreact";

import { fetchProductById } from "../../Actions/ProductAction";
import OrderPage from "../Order/OrderPage";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      selectProduct: {},
      ischeckout: false
    };
    this.onBuyClicked = this.onBuyClicked.bind(this);
  }
  componentWillMount() {
    this.setState({ id: this.props.match.params.id });
    this.props.fetchProductById(this.props.match.params.id);
    console.log("Send Request ", this.props.match.params.id);
  }
  componentWillReceiveProps(newProps) {
    this.setState({ selectProduct: newProps.selectProduct });
  }
  onBuyClicked() {
    this.setState({ ischeckout: true });
  }
  render() {
    const { name, description, price, img } = this.state.selectProduct;
    let productImgs = null;
    let noImg = null;
    if (img) {
      productImgs = img.map((im, index) => (
        <CarouselItem itemId={index + 1} key={index}>
          <img className="d-block w-100" src={im} alt="First slide" />
        </CarouselItem>
      ));
    } else {
      noImg = <h1>No img avaiable</h1>;
    }
    if (!this.state.ischeckout) {
      return (
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
                className="z-depth-1"
              >
                <CarouselInner>{productImgs}</CarouselInner>
              </Carousel>
            </div>
            <div className="col-md-8">
              <h1>
                {name}
                <hr />
              </h1>
              <p>{description}</p>

              <Card cascade>
                <CardBody cascade>
                  <p>
                    Price:{" "}
                    <strong>
                      <span style={{ fontSize: 25 }}>${price}</span>
                    </strong>
                  </p>
                  <Button
                    className="float-right"
                    href="#"
                    onClick={this.onBuyClicked}
                  >
                    Buy now
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      );
    } else {
      return <OrderPage item={this.state.selectProduct} />;
    }
  }
}
const mapStateToProps = state => ({
  selectProduct: state.products.productItem
});

export default connect(
  mapStateToProps,
  { fetchProductById }
)(ProductDetail);
