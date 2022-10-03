import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import  signupStyle  from '../../assets/css/Nav/signup.module.css'
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [check, setCheck] = useState(false);
  // const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = (e)=>{
    e.preventDefault();
    console.log(username, email,check, password);
    try{
      if(password === confirmPassword){
        if(check){
          setError('');
          setLoading(true)
          // signup(email, password, username)
          setLoading(false)
          navigate('/');
          
        }else{
          setError('Your must check terms and conditions.')
          return
        }
      }else{
        setError('Password not matching!')
        return
      }
    }catch(error){
      console.log('registraion error')
    }
  }
  return (
    <>
      <div className={signupStyle.signupForm}>
        <Form
          method="post"
          className={signupStyle.form}
          onSubmit={handleSignup}
        >
          <h2>Sign Up</h2>
          <p className={signupStyle.hintText}>
            Create your account. It's free and only takes a minute.
          </p>
          <Form.Group className="mb-2">
            <div className="row">
              <div className="col-sm-6">
                <Form.Control
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required="required"
                  onInput={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-sm-6">
                <Form.Control
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required="required"
                  onInput={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              required="required"
              onInput={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              required="required"
              onInput={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required="required"
              onInput={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              required="required"
              onInput={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="form-check d-flex align-items-center mb-5">
            <Form.Control className="form-check-input me-2" type="checkbox" onInput={(e)=>setCheck(e.target.checked)} />
            <Form.Label className="mb-0">
              I agree all statements in{" "}
              <Link className="d-inline" to="">
                Terms of service
              </Link>
            </Form.Label>
          </Form.Group>
          <Form.Group className="text-center">
            <Button type="submit" className="btn btn-success btn-block">
              SignUp Now
            </Button>
          </Form.Group>
          <div className="text-center">
            Already have an account?{" "}
            <Link className="d-inline" to="/signin">
              Sign in
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
}
