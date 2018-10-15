import React, { Component } from "react";
import { Input, Button, FormInline } from "mdbreact";
import { connect } from "react-redux";
import { searchProducts } from "../../Actions/ProductAction";

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      keyword: ""
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.updateStates = this.updateStates.bind(this);
  }
  updateStates(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  search(keywords) {
    /* Construct the query json */
    let queryFilter = { where: { name: { like: keywords } } };
    this.props.searchProducts(queryFilter);
  }
  submitHandler(event) {
    event.preventDefault();
    this.search(this.state.keyword);
    console.log(this.props.products);
  }

  render() {
    const { keyword } = this.state;

    return (
      <div className="text-center">
        <FormInline onSubmit={this.submitHandler}>
          <div className="col-sm-10">
            <Input
              name="keyword"
              className="form-control w-100"
              value={keyword}
              onChange={this.updateStates}
            />
          </div>
          <div className="col-sm-2">
            <Button type="submit" className="w-100">
              Search
            </Button>
          </div>
        </FormInline>
      </div>
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
)(SearchForm);
