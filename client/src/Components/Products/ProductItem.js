import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      data: this.props.data
    };
  }

  render() {
    const { id, data } = this.state;
    return (
      <div className="card" key={id}>
        <div className="view overlay">
          <a href="">
            <div className="mask rgba-white-slight" />
          </a>
        </div>

        <div className="card-body">
          <h4 className="card-title">{data.name}</h4>
          <p className="card-text">{data.description}</p>
          <Link
            className="btn btn-primary float-right"
            to={"/products/" + this.state.id}
          >
            More detail
          </Link>
        </div>
      </div>
    );
  }
}
export default ProductItem;
