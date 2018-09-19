import React from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "mdbreact";
import { withRouter } from 'react-router-dom';
import User from "./Auth/User";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      user: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    let user = this.state.user;

    return (
        <Navbar color="blue" dark expand="lg">
          <Container>
            <NavbarBrand href="/">
              <strong className="px-2">StoreApp</strong>
            </NavbarBrand>
            {!this.state.isWideEnough && (
              <NavbarToggler onClick={this.onClick} />
            )}
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left>
                <NavItem>
                  <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/products">Product</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/about">About</NavLink>
                </NavItem>
              </NavbarNav>
              <User />
            </Collapse>
          </Container>
        </Navbar>
    );
  }
}
export default Nav;
