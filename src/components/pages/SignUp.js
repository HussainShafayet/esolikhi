import React from 'react'
import { Button, Form } from 'react-bootstrap'
import  signupStyle  from '../../assets/css/Nav/signup.module.css'
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className={signupStyle.signupForm}>
        <Form method="post" className={signupStyle.form}>
          <h2>Register</h2>
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
                />
              </div>
              <div className="col-sm-6">
                <Form.Control
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required="required"
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              required="required"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required="required"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              required="required"
            />
          </Form.Group>
          <Form.Group className="form-check d-flex align-items-center mb-5">
            <Form.Control className="form-check-input me-2" type="checkbox" />
            <Form.Label className="mb-0">
              I agree all statements in <Link className='d-inline' to=''>Terms of service</Link>
            </Form.Label>
          </Form.Group>
          <Form.Group className='text-center'>
            <Button type="submit" className="btn btn-success btn-block">
              Register Now
            </Button>
          </Form.Group>
          <div className="text-center">
          Already have an account? <Link className='d-inline' to="signin">Sign in</Link>
        </div>
        </Form>
      </div>
    </>
  );
}
