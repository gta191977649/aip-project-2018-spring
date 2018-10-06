import {Component} from "react";
import  React from 'react';
import { Button,Collapse } from 'mdbreact'

class UserOrderItem extends Component {
    constructor(props) {
        super(props);
        this.learnMore = this.learnMore.bind(this);
        this.state = {
            openMore:false,
        }
    }

    learnMore() {
        this.setState({openMore:!this.state.openMore});
    }
    render() {
        return(
            <div className="card ">

                <div className="card-body">
                    <h3 className="card-title">{this.props.data.product.name}</h3>
                    <div className="card-text">QTY: {this.props.data.qty}</div>
                    <Collapse isOpen={this.state.openMore}>
                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
                    </Collapse>
                    <button className="btn btn-primary float-right" onClick={this.learnMore}>Detail</button>
                </div>
            </div>
        );
    }
}
export default UserOrderItem;