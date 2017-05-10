import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';
import {Link} from "react-router"

class NavbarTop extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop default>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">My Awesome App</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <IndexLinkContainer to="/">
                <NavItem>
                  <Glyphicon glyph="home" />
                    Home
                </NavItem>
              </IndexLinkContainer>
              <LinkContainer to="/about">
                <NavItem>
                  About</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarTop;
