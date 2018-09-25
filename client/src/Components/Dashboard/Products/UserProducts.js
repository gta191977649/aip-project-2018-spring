import React from "react";
import {Component} from "react";
import UserProductItem from './UserProductItem';

class UserProducts extends Component{
    constructor(props) {
        super(props);
        this.state = {
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
        }
    }
    componentDidMount() {
        //Set fake data
        //console.log(this.state.products);
    }
    render () {
        const productItems = this.state.products.map((item,idx) =>(
            <div className="col-md-5">
                <UserProductItem key={idx} data={item}/>
            </div>
        ));
        return(
            <div>
                <h1>My Products <small className="text-info">{this.state.products.length}</small></h1>
                <hr/>
                <div className="row">
                    {productItems}
                </div>

            </div>
        );
    }
}
export default UserProducts;