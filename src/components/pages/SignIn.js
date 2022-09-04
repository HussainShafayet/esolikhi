import React, { useState} from 'react'
import { Button, Form,Spinner } from "react-bootstrap";
import signupStyle from "../../assets/css/Nav/signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {login} = useAuth();
  const navigate = useNavigate();
  
  const handleSignin = async(e) =>{
    e.preventDefault();
    try{
      setError('');
      setLoading(true);
      await login(email, password);
      setLoading(false);
      navigate('/')
    }catch(error){
      console.log('login error',error)
      setLoading(true);
      setError(error.message);
    }
    
  }
  return (
    <div className={signupStyle.signinForm}>
      <Form method="post" className={signupStyle.form} onSubmit={handleSignin}>
        <h2>Sign In</h2>
        <Form.Group className="mb-2">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            required="required"
            onInput={(e)=>setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required="required"
            onInput={(e)=>setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="form-check d-flex align-items-center mb-2">
          <Form.Control className="form-check-input me-2" type="checkbox" />
          <Form.Label className="mb-0">
            Remember me
          </Form.Label>
        </Form.Group>
        {error?
          (<span className="text-danger mb-2">{error}</span>):""
        }
        <Form.Group className="text-center">
          <Button type="submit" className="btn btn-success btn-block">
            {!loading? "Sign In":(
              <>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="sr-only"> Sign In...</span>
              </>
              )}
          </Button>
        </Form.Group>
        <div className="text-center">
          Don't have an account?{" "}
          <Link className="d-inline" to="/signup">
            Sign up
          </Link>
        </div>
      </Form>
    </div>
  );
}
