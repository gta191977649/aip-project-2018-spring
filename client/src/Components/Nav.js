import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import User from './Auth/User';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            user: false
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        let user = this.state.user;

        return (    
            <Router>
                <Navbar color="blue" dark expand="lg">
                    <Container>
                        <NavbarBrand href="/">
                            <strong className="px-2">StoreApp</strong>
                        </NavbarBrand>
                        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                        <Collapse isOpen = { this.state.collapse } navbar>
                            <NavbarNav left>
                                <NavItem>
                                    <a href="/home" className="nav-link">Home</a>
                                </NavItem>
                                <NavItem>
                                    <a href="/about" className="nav-link">About</a>
                                </NavItem>
                            </NavbarNav>
                            <User user={user}/>
                        </Collapse>
                    </Container>
                </Navbar>
            </Router>
        );
    }
}

export default Nav
