import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Account() {
  const { currentUser,logout } = useAuth();
  const username = currentUser ? currentUser.displayName : "";
  const navigate = useNavigate();


  const handleLogout = async ()=>{
    await logout();
    navigate("/signin");
  }
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
      {!currentUser ?
      <>
      <NavLink className="nav-link" to="signin">
        SignIn
      </NavLink>
      <NavLink className="nav-link" to="signup">
        SignUp
      </NavLink> </> :
      <>
      <NavLink className="nav-link" to="user">
        {username}
      </NavLink>
      <NavLink className="nav-link" to="/logout" onClick={handleLogout}>
        Logout
      </NavLink>
      </>
      }
    </>
  );
}
