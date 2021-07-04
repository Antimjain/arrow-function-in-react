import React, { Component } from "react";
import axios from "axios";
import {Table, Button} from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// // https://backbencher.dev/react/hooks-interview-questions
class App extends Component {
  constructor() {
    super();
    this.state = { 
    
    };
  }


 


  render() {

    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default App;


