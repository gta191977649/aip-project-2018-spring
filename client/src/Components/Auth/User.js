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

export class User extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    userLogout: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  logout(event) {
    event.preventDefault();
    this.props.userLogout(this.props.auth.user, this.props.history);
  }

  navigate(event) {
    let target = event.target;
    let location = target.attributes.to.value;
    this.props.history.push(location);
  }

  render() {
    const { isLoggedIn } = this.props.auth;
    const { name, avatar, handle } = this.props.auth.user;
    const { itemcount } = this.props.cart;

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
              <DropdownItem
                to="/dashboard"
                className="dropdown-item"
                onClick={this.navigate}
              >
                <Fa icon="bar-chart" className="mr-1" />
                Dashboard
              </DropdownItem>
              <DropdownItem
                to={"/profile/" + handle}
                className="dropdown-item"
                onClick={this.navigate}
              >
                <Fa icon="user" className="mr-1" /> Your Profile
              </DropdownItem>
              <DropdownItem
                to="/orders"
                className=" dropdown-item"
                onClick={this.navigate}
              >
                <Fa icon="list" className="mr-1" /> Your orders
              </DropdownItem>
              <DropdownItem
                to="/logout"
                className="dropdown-item"
                onClick={this.logout}
              >
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
    return (
      <>
        <NavItem>
          <NavLink to="/cart" className="ml-2">
            <Fa icon="shopping-basket" className="mr-1" />
            Cart (Items: {itemcount})
          </NavLink>
        </NavItem>
        {component}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.cart
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
