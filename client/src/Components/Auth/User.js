import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink, NavItem } from "mdbreact";
import { withRouter } from "react-router-dom";
import { userLogout } from "../../Actions/AuthActions";
import { addFlashMessage } from "../../Actions/FlashActions";

export class User extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    userLogout: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  };

  logout(event) {
    event.preventDefault();
    console.log("LOGO");
    this.props.userLogout(this.props.auth.user, this.props.history);
  }

  render() {
    const { isLoggedIn } = this.props.auth;
    const userLinks = (
      <>
        <NavItem>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/logout" onClick={this.logout.bind(this)}>
            Logout
          </NavLink>
        </NavItem>
      </>
    );

    const guestLinks = (
      <>
        <NavItem>
          <NavLink to="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/register">Register</NavLink>
        </NavItem>
      </>
    );
    let component = isLoggedIn ? userLinks : guestLinks;
    return component;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  userLogout,
  addFlashMessage
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(User)
);
