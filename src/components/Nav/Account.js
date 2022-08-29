import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Account() {
  return (
    <>
      {/* <Nav className="me-auto my-2 my-lg-0">
        <NavLink className="nav-link" to="signin">
          SingIn
        </NavLink>
        <NavLink className="nav-link" to="signup">
          SignUp
        </NavLink>
      </Nav> */}
      <NavLink className="nav-link" to="signin">
        SignIn
      </NavLink>
      <NavLink className="nav-link" to="signup">
        SignUp
      </NavLink>
    </>
  );
}
