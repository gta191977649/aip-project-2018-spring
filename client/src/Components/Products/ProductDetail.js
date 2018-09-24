import React from "react";
import {Component} from "react";
import {fetchProductById} from "../../Actions/ProductAction";
import {connect} from 'react-redux';
class ProductDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id : null
        }
    }
    componentWillMount () {
        this.setState({id : this.props.match.params});
        this.props.fetchProductById(this.props.match.params);
    }

    render() {
        return(
            <div>
                Product Details {this.state.id}
                
            </div>
        );
    }
}
const mapStateToProps = state => ({
    product:state.products.productItem
})

export default connect(mapStateToProps,{fetchProductById})(ProductDetail);