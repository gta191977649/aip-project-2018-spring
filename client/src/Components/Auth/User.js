import React from "react";
import { NavbarNav, NavItem, NavLink } from "mdbreact";
/*import { BrowserRouter as Router } from "react-router-dom";*/
export class User extends React.Component {
  render() {
    return (
      <NavbarNav right>
        <NavItem>
          <NavLink to="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/register">Register</NavLink>
        </NavItem>
      </NavbarNav>
    );
  }
}

export default User;
