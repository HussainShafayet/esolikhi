import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import Account from './Account';
import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand>eshoLikhi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Posts</Nav.Link>
            <Nav.Link>About</Nav.Link>
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
