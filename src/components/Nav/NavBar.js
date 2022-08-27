import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import Account from './Account';
import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <NavLink className="navbar-brand" to="/">esoLikhi</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="posts">Posts</NavLink>
            <NavLink className="nav-link" to="about">About</NavLink>
          </Nav>
          <Nav>
            <Nav.Link>
              <SearchBar />
            </Nav.Link>
            <Nav.Link>
                <Account />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
