import React from "react";
import {Component} from "react";
import UserProductItem from './UserProductItem';
import {fetchProductByUserId} from "../../../Actions/ProductAction";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import EditProduct from "./EditProduct";
class UserProducts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isEdit: false,
            targetEditItemData:null,
        }
        this.removeData = this.removeData.bind(this);
        this.toogleEdit = this.toogleEdit.bind(this);
        this.fetchProductData = this.fetchProductData.bind(this);
    }
    toogleEdit(itemData=null) {
      if(itemData!=null) {
        this.setState({
          isEdit: true,
          targetEditItemData:itemData,
        });
      } else {
        this.setState({
          isEdit: false,
          targetEditItemData:null,
        });
      }

    }
    componentDidMount() {
        //Set fake data
        //console.log(this.state.products);
        this.fetchProductData(this.props.userID);
    }

    fetchProductData(userId) {
        this.props.fetchProductByUserId(userId);
    }

    removeData(id) {
        this.setState({
          products:this.state.products.filter(item => item.id !== id)
        });
    }

    //TODO: Replace this with better redux
    USAFE_componentWillReceiveProps(newProps) {
        this.setState({products: newProps.userProducts});
        this.setState({reflash: false});
    }

    render () {
        const productItems = this.state.products.map((item,idx) =>(
            <div className="col-md-5" key={idx}>
                <UserProductItem data={item} parentRemove={this.removeData} parentEdit={this.toogleEdit}/>
            </div>
        ));
        let noItemAlert;
        if(this.state.products.length == 0) noItemAlert = <div>No Item</div>;
           if(this.state.isEdit){
              return(
                <EditProduct itemData={this.state.targetEditItemData} cancelHanlder={this.toogleEdit} reflashHandle={this.fetchProductData}/>
              )
           } else {
             return (
               <div>
                 <Link className="btn btn-primary float-right" to="/product/add">Add Product</Link>
                 <h1>My Products <small className="text-info">{this.state.products.length}</small></h1>
                 <hr/>
                 {noItemAlert}
                 <div className="row">
                   {productItems}
                 </div>
               </div>
             );
           }
    }
}
const mapStateToProps = state => ({
    userProducts: state.products.userItems,
    userID:state.auth.user.id,
    error: state.products.error,
    errorMsg: state.products.errorMsg
})
export default connect(mapStateToProps, {fetchProductByUserId})(UserProducts);
