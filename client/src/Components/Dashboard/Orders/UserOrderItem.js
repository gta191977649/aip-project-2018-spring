import {Component} from "react";
import React from 'react';
import connect from "react-redux/es/connect/connect";
import {fetchProfileByUserId} from "../../../Actions/AuthActions";
import {Link} from "react-router-dom";

class UserOrderItem extends Component {
  constructor(props) {
    super(props);
    this.learnMore = this.learnMore.bind(this);
    this.state = {
      openMore: false,
      sellerName:null,
    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps(newprops) {
      this.setState({sellerName:newprops.seller.userName})
   //console.log("fetched user:", newprops.seller);
  }



  learnMore() {
    this.setState({openMore: !this.state.openMore});
    //this.fetchSellerProfile(this.props.data.product.userId);

  }

  render() {
    return (
      <div className="card ">

        <div className="card-body">
          <h3 className="card-title">{this.props.data.product.name}</h3>
          <div className="card-text">QTY: {this.props.data.qty}</div>
          {
            /*
            <Collapse isOpen={this.state.openMore}>
              <p>Seller name: {this.state.sellerName} </p>
            </Collapse>

            <button className="btn btn-primary float-right" onClick={this.learnMore}>Detail</button>
            */
          }
          <Link className="btn btn-primary float-right" to={"/order/detail/"+this.props.data.id}>Detail</Link></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  seller: state.auth.requesedUserInfo
});
export default connect(mapStateToProps, {fetchProfileByUserId})(UserOrderItem);
