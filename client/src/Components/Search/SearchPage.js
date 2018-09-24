import SearchForm from "./SearchForm";
import React, { Component } from "react";
import {connect} from 'react-redux';
import  {searchProducts} from "../../Actions/ProductAction";
import  "./style.css"

export class SearchPage extends Component {
    componentWillMount() {
        
    }
    render() {
      let productItems = this.props.products.map(item => (
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
