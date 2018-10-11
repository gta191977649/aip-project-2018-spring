import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'mdbreact'
/* compoments */
import UserProfile from './UserProfile';
import UserProducts from './Products/UserProducts';
import UserOrder from './Orders/UserOrders';
import UserSell from './Sells/UserSells'
export class DashboardPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            renderCompoment: "",
            selectedIndex: 0,
        }
    }
    componentWillMount() {
        this.onNavClick(0);
    }
    onNavClick(id) {
        console.log("clicked ",id);
        switch (id) {
            case 0:
                this.setState({renderCompoment:<UserProfile/>});
                break;
            case 1:
                this.setState({renderCompoment:<UserProducts/>});
                break;
            case 2:
                this.setState({renderCompoment:<UserOrder/>});
                break;
            case 3:
                this.setState({renderCompoment:<UserSell/>});
                break;
            default:
                this.setState({renderCompoment:<UserProfile/>});
                break;

        }
    }
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3">
                        <ListGroup>
                            <ListGroupItem hover onClick={() => {this.onNavClick(0)}}>Profile</ListGroupItem>
                            <ListGroupItem hover onClick={() => {this.onNavClick(1)}}>My Sell items</ListGroupItem>
                            <ListGroupItem hover onClick={() => {this.onNavClick(2)}}>My Orders</ListGroupItem>
                            <ListGroupItem hover onClick={() => {this.onNavClick(3)}}>My Sells</ListGroupItem>
                        </ListGroup>
                    </div>
                    <div className="col-md-9">
                        {this.state.renderCompoment}
                    </div>
                </div>
            </div>
        )

    }
}

export default DashboardPage
