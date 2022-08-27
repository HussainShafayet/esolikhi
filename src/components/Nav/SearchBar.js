import React from 'react';
import { Form,Button} from 'react-bootstrap';

export default function SearchBar() {
  return (
    <>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </>
  );
}
