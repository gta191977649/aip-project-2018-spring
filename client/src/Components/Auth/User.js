import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  NavLink,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Fa
} from "mdbreact";
import { withRouter } from "react-router-dom";
import { userLogout } from "../../Actions/AuthActions";
import { addFlashMessage } from "../../Actions/FlashActions";

export class User extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    userLogout: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    this.props.userLogout(this.props.auth.user, this.props.history);
  }

  render() {
    const { isLoggedIn } = this.props.auth;
    const { name, avatar, handle } = this.props.auth.user;
    const userLinks = (
      <>
        <NavItem>
          <Dropdown>
            <DropdownToggle nav caret>
              <img
                src={"http:" + avatar}
                className="img-fluid user-avatar mr-2"
                alt="User Avatar"
              />
              {name}
            </DropdownToggle>
            <DropdownMenu>
              <NavLink to="/dashboard" className="dropdown-item black-text">
                <Fa icon="bar-chart" className="mr-1" />
                Dashboard
              </NavLink>
              <NavLink
                to={"/profile/" + handle}
                className="dropdown-item black-text"
              >
                <Fa icon="user" className="mr-1" /> Your Profile
              </NavLink>
              <NavLink to="/orders" className="dropdown-item black-text">
                <Fa icon="list" className="mr-1" /> Your orders
              </NavLink>
              <DropdownItem href="/logout">
                <Fa icon="sign-out" className="mr-1" />
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
      </>
    );

    const guestLinks = (
      <>
        <NavItem>
          <NavLink to="/login">
            <Fa icon="sign-in" className="mr-1" /> Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/register">
            <Fa icon="pencil-square-o" className="mr-1" /> Register
          </NavLink>
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
  userLogout
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(User)
);
