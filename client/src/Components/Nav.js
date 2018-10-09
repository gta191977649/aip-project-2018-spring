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
import User from "./Auth/User";
import SearchNavForm from "./Search/SearchNavForm";

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
        <Container>
          <NavbarBrand href="/">
            <strong className="px-2">AIP Auctions</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/categories">Product Categories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <SearchNavForm />
              <User />
            </NavbarNav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Nav;
