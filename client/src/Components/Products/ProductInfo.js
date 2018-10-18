// @import NPM Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col } from "mdbreact";
// @import Project Components
import isEmpty from "../../Utils/isEmpty";
import convertCentsToDollars from "../../Utils/convertCentsToDollars";
import { addToCart } from "../../Actions/CartActions";

// @Name ProductInfo
// @Description Provides display to show information of a product detail
export class ProductInfo extends Component {
  // Better than doing ProductInfo.propTypes
  // has same effect though.
  static propTypes = {
    products: PropTypes.object.isRequired,
    cart: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {};

    this.itemCartClick = this.itemCartClick.bind(this);
  }

  componentDidMount() {
    let link = this.props.match.params.link;
    const { products } = this.props.products;
    this.findProduct(products, link);
  }

  componentWillReceiveProps(nextProps) {
    let link = this.props.match.params.link;
    const { products } = nextProps.products;
    this.findProduct(products, link);
  }

  async findProduct(products, link) {
    if (!isEmpty(link)) {
      const product = products.find(product => product.link === link);
      if (!isEmpty(product)) {
        this.setState({ ...product });
      }
    }
  }
  // @Name itemCartClick
  // @Description Adds item to cart
  async itemCartClick(event) {
    event.preventDefault();
    if (this.state.hasStock) {
      await this.props.addToCart(this.state, this.props.cart);
    }
  }

  render() {
    const { image, name, description, hasStock, qty, price } = this.state;
    //Returning the component display
    return (
      <Container className="mt-5" fluid>
        <Row className="pt-5 br-primary profile-header">
          <Container>
            <Row />

            <Row>
              <Col md="12" className="pb-3">
                <img
                  src={"http://localhost:3000/" + image}
                  alt="product"
                  className="img-fluid d-block mx-auto"
                />
              </Col>
            </Row>

            <Row>
              <Col md="6" className="mx-auto">
                <h1 className="font-weight-boldmt-4 pt-2 text-center">
                  {name} ($
                  {convertCentsToDollars(price)})
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="6" className="mx-auto text-center">
                <div className=" ">
                  ({hasStock ? qty + " left" : "None Left"})
                </div>
                <button
                  onClick={this.itemCartClick}
                  className="btn btn-primary"
                  disabled={!hasStock}
                >
                  Add To Cart
                </button>
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="profile-body">
          <Container>
            <Row className="mt-2">
              <Col className="text-center">
                <h4>description: </h4>
              </Col>
            </Row>
            <Row>
              <Col>{description}</Col>
            </Row>

            <Row>
              <Col />
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
});

const mapDispatchToProps = {
  addToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInfo);
