// @import NPM Modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Input,
  FormInline,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "mdbreact";
import queryString from "query-string";
// @import Project Components
import { searchProducts } from "../../Actions/SearchActions";
import isEmpty from "../../Utils/isEmpty";
import Product from "../Products/Product";

export class SearchPage extends Component {
  static propTypes = {
    search: PropTypes.object.isRequired,
    searchProducts: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      filter: {
        name: ""
      }
    };
  }
  componentDidMount() {
    // Filter out the product
    const filter = queryString.parse(this.props.location.search);
    if (!isEmpty(filter)) {
      this.setState({ filter });
      this.searchProduct(filter);
    }
  }
  // @Name handleSearch
  // @Description Deal with user search
  handleSearch(event) {
    event.preventDefault();
    this.searchProduct(this.state.filter);
  }

  async searchProduct(filter) {
    await this.props.searchProducts(filter, this.props.history);
  }

  updateState(event) {
    this.setState({
      filter: { name: event.target.value }
    });
  }

  render() {
    const { name } = this.state.filter;
    let productItems;
    // Display the filtered product list
    if (this.props.search.isEmpty) {
      productItems = (
        <Col md="4" className="mx-auto">
          <Card>
            <CardBody>
              <CardTitle>Sorry nothing found</CardTitle>
              <CardText>
                We cannot found anything based on your keywords, maybe try
                another search?
              </CardText>
            </CardBody>
          </Card>
        </Col>
      );
    } else {
      productItems = this.props.search.items.map((item, i) => (
        <Product key={i} product={item} />
      ));
    }

    return (
      <Container className="mt-custom" fluid>
        <Row>
          <Col md="6" className="text-center mx-auto">
            <h2>Enter a name of a product and then click search.</h2>
          </Col>
        </Row>
        <Row>
          <Col md="6" className="mx-auto">
            <FormInline
              onSubmit={e => this.handleSearch(e)}
              className="text-center"
            >
              <Col md="8">
                <Input
                  name="name"
                  className="form-control w-100"
                  value={name}
                  onChange={e => this.updateState(e)}
                />
              </Col>
              <Col md="4">
                <Button type="submit" className="w-100">
                  Search
                </Button>
              </Col>
            </FormInline>
          </Col>
        </Row>
        
          <Row>{productItems}</Row>
        
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = {
  searchProducts
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchPage)
);
