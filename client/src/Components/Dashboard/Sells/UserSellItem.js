import { Component } from "react";
import React from 'react';
import {Link} from "react-router-dom";

class UserSellItem extends Component {
  render() {
    return (
      <div className="card ">

        <div className="card-body">
          <h3 className="card-title">{this.props.data.product.name}</h3>
          <div className="card-text">QTY: {this.props.data.qty}</div>
          {
            /*
          <Collapse isOpen={this.state.openMore}>
            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
          </Collapse>
          <button className="btn btn-primary float-right" onClick={this.learnMore}>Detail</button>
          */
          }
          <Link className="btn btn-primary float-right" to={"/sell/detail/" + this.props.data.id}>Detail</Link>
        </div>
      </div>
    );
  }
}
export default UserSellItem;
