import {Component} from "react";
import React from "react";
import {connect} from 'react-redux';
import {fetchProducts} from "../../Actions/ProductAction";
import {addFlashMessage} from "../../Actions/FlashActions";

export class UserProfile extends Component {
    render () {
        return (
            <div>
                <h1>My Profile</h1>
                <hr/>
                <h3>Name</h3>
                {this.props.userName}
                <h3>E-mail</h3>
                {this.props.userEmail}
            </div>
        )
    };
}
const mapStateToProps = state => ({
    userName:state.auth.user.userName,
    userEmail:state.auth.user.email
})
export default connect(mapStateToProps)(UserProfile);
