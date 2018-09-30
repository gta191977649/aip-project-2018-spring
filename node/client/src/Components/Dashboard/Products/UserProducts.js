import React from "react";
import {Component} from "react";
import UserProductItem from './UserProductItem';
import {fetchProductByUserId} from "../../../Actions/ProductAction";
import connect from "react-redux/es/connect/connect";
import {Link} from 'react-router-dom';
class UserProducts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            /*
            products : [
                {
                    "name": "My sell product 1",
                    "price" : 21.5,
                    "description": "This is an test decsription #1",
                    "img":["https://api.th9.bid/random","https://archive.sparrow.moe/tools/api/php-random-img"]
                },
                {
                    "name": "My sell product 2",
                    "price" : 10.5,
                    "description": "This is an test decsription #2",
                    "img":["https://archive.sparrow.moe/tools/api/php-random-img"]
                },
            ],
            */
            products: []
        }
    }
    componentDidMount() {
        //Set fake data
        //console.log(this.state.products);
        fetchProductByUserId();

    }
    componentWillMount() {
        console.log(this.props.userID);
        this.props.fetchProductByUserId(this.props.userID);

    }
    componentWillReceiveProps() {
        this.setState({products:this.props.userProducts});
    }

    render () {
        const productItems = this.state.products.map((item,idx) =>(
            <div className="col-md-5" key={idx}>
                <UserProductItem data={item}/>
            </div>
        ));
        let noItemAlert;
        if(this.state.products.length == 0)
           noItemAlert = <div>No Item</div>;
        return(
            <div>
                <h1>My Products <small className="text-info">{this.state.products.length}</small></h1>
                <button><Link to="/product/add">Add Product</Link></button>
                <hr/>
                {noItemAlert}
                <div className="row">
                    {productItems}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    userProducts: state.products.userItems,
    userID:state.auth.user.id,
    error: state.products.error,
    errorMsg: state.products.errorMsg
})
export default connect(mapStateToProps, {fetchProductByUserId})(UserProducts);
