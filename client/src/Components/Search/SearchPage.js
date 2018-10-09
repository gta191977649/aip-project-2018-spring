import SearchForm from "./SearchForm";
import React, { Component } from "react";
import { connect } from "react-redux";
import { searchProducts } from "../../Actions/ProductAction";
import { Container, Row, Col } from "mdbreact";
import ProductItem from "../Products/ProductItem";
import queryString from "query-string";

export class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: []
    };
  }
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    this.setState({ query: values });
  }
  render() {
    let productItems = this.props.products.map(item => (
      <ProductItem id={item.id} data={item} key={item.id} />
    ));
    if (!this.props.products.length) {
      productItems = (
        <div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sorry nothing found</h4>
              <p className="card-text">
                We cannot found anything based on your keywords, maybe try
                another search?
              </p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <Container>
        <Row>
          <Col className="text-center">
            <h2>Enter a name of a product and then click search.</h2>
          </Col>
        </Row>
        <Row>
          <Col col="10" className="mx-auto">
            <SearchForm />
          </Col>
        </Row>
        <Row>
          <Col>{productItems}</Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  error: state.products.error,
  errorMsg: state.products.errorMsg
});

export default connect(
  mapStateToProps,
  { searchProducts }
)(SearchPage);
