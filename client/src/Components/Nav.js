import React from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Fa,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "mdbreact";
import { withRouter } from "react-router-dom";
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
    let shouldTransparent = this.props.location.pathname === "/";
    let transparent = shouldTransparent ? true : false;
    return (
      <Navbar
        color="br-primary"
        expand="lg"
        fixed="top"
        dark
        scrolling
        transparent={transparent}
      >
        <Container fluid>
          <NavbarBrand href="/">
            <strong className="px-2">{process.env.REACT_APP_NAME}</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem>
                <NavLink to="/">
                  <Fa icon="home" className="mr-1" />
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <Fa icon="list" className="mr-1" />
                    Products
                  </DropdownToggle>
                  <DropdownMenu>
                    <NavLink to="/products" className="dropdown-item">
                      <Fa icon="list" className="mr-1" /> All Products
                    </NavLink>

                    <NavLink to="/category/clothes" className="dropdown-item">
                      <Fa icon="tags" className="mr-1" /> Clothes
                    </NavLink>

                    <NavLink
                      to="/category/electronics"
                      className="dropdown-item"
                    >
                      <Fa icon="television" className="mr-1" /> Electronics
                    </NavLink>

                    <NavLink to="/category/software" className="dropdown-item">
                      <Fa icon="gears" className="mr-1" /> Software
                    </NavLink>

                    <NavLink to="/category/toys" className="dropdown-item ">
                      <Fa icon="soccer-ball-o" className="mr-1" /> Toys
                    </NavLink>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <NavLink to="/about">
                  <Fa icon="info-circle" className="mr-1" />
                  About
                </NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <User />
            </NavbarNav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default withRouter(Nav);
