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
    this.navigate = this.navigate.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  navigate(event) {
    let target = event.target;
    let location = target.attributes.to.value;
    this.props.history.push(location);
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
                <NavLink to="/search">
                  <Fa icon="search" className="mr-1" />
                  Search
                </NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <Fa icon="list" className="mr-1" />
                    Products
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/products" onClick={this.navigate}>
                      <Fa icon="list" className="mr-1" /> All Products
                    </DropdownItem>

                    <DropdownItem
                      to="/category/clothes"
                      onClick={this.navigate}
                    >
                      <Fa icon="tags" className="mr-1" /> Clothes
                    </DropdownItem>

                    <DropdownItem
                      to="/category/electronics"
                      onClick={this.navigate}
                    >
                      <Fa icon="television" className="mr-1" /> Electronics
                    </DropdownItem>

                    <DropdownItem
                      to="/category/software"
                      onClick={this.navigate}
                    >
                      <Fa icon="gears" className="mr-1" /> Software
                    </DropdownItem>

                    <DropdownItem to="/category/toys" onClick={this.navigate}>
                      <Fa icon="soccer-ball-o" className="mr-1" /> Toys
                    </DropdownItem>
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
