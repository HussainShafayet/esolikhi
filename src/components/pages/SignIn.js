import React from 'react'
import { Button, Form } from "react-bootstrap";
import signupStyle from "../../assets/css/Nav/signin.module.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className={signupStyle.signinForm}>
      <Form method="post" className={signupStyle.form}>
        <h2>Sign In</h2>
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
        <Form.Group className="form-check d-flex align-items-center mb-3">
          <Form.Control className="form-check-input me-2" type="checkbox" />
          <Form.Label className="mb-0">
            Remember me
          </Form.Label>
        </Form.Group>
        <Form.Group className="text-center">
          <Button type="submit" className="btn btn-success btn-block">
            Sign In
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
