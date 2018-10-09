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
import { Link } from "react-router-dom";
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
    return (
      <Navbar color="br-primary" expand="lg" fixed="top" dark scrolling>
        <Container fluid>
          <NavbarBrand href="/">
            <strong className="px-2">AIP Auctions</strong>
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
                    <DropdownItem href="#">
                      <Fa icon="list" className="mr-1" /> All Products
                    </DropdownItem>

                    <DropdownItem href="#">
                      <Fa icon="tags" className="mr-1" /> Clothes
                    </DropdownItem>

                    <DropdownItem href="#">
                      <Fa icon="television" className="mr-1" /> Electronics
                    </DropdownItem>

                    <DropdownItem href="#">
                      <Fa icon="gears" className="mr-1" /> Software
                    </DropdownItem>

                    <DropdownItem href="#">
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
export default Nav;
