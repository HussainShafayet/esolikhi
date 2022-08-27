import React from 'react';
import { Nav, NavLink } from 'react-bootstrap'

export default function Account() {
  return (
    <>
      <Nav className="me-auto my-2 my-lg-0">
        <NavLink className="nav-link" >
          Login
        </NavLink>
        <NavLink className="nav-link">
          SignUp
        </NavLink>
      </Nav>
    </>
  );
}
