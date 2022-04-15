import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailBlur = event => {
      setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
      setPassword(event.target.value)
    }

    const handleSubmit = event => {
      event.preventDefault();
      console.log('clicked')
    }

    return (
        <Form onClick={handleSubmit} className='w-50 mx-auto my-5' id='form'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Accept Terms & Conditions" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
    );
};

export default Login;