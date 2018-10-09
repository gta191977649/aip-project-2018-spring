import {Component} from "react";
import React from "react";
import {connect} from 'react-redux';

export class UserProfile extends Component {
    render () {
        return (
            <div>
                <h1>Welcome, <small className="text-info">{this.props.userName}</small></h1>
                    <hr/>
                <div className="card ">

                    <div className="card-body">
                        <h3 className="card-title">Name</h3>
                        <div className="card-text"> {this.props.userName}</div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">E-mail</h3>
                        <div className="card-text">{this.props.userEmail}</div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => ({
    userName:state.auth.user.userName,
    userEmail:state.auth.user.email
})
export default connect(mapStateToProps)(UserProfile);
