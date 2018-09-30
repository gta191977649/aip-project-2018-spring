import SearchForm from "./SearchForm";
import React, { Component } from "react";
import {connect} from 'react-redux';
import  {searchProducts} from "../../Actions/ProductAction";
import  "./style.css"
import ProductItem from "../Products/ProductItem";

export class SearchPage extends Component {
    componentWillMount() {
        
    }
    render() {
      let productItems = this.props.products.map(item => (
          <ProductItem id={item.id} data={item} key={item.id}/>
      ));
      if(!this.props.products.length) {
        productItems =
          <div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Sorry nothing found</h4>
                <p className="card-text">We cannot found anything based on your keywords, maybe try another search?</p>
              </div>
            </div>
          </div>

        }

      return(
          <div>
              <SearchForm/>
              {productItems}
          </div>
      )
    }
}

const mapStateToProps = state => ({
  products:state.products.items,
  error:state.products.error,
  errorMsg:state.products.errorMsg
})

export default connect(mapStateToProps,{searchProducts})(SearchPage);
