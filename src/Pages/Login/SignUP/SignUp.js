import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNameBlur = event => {
      setName(event.target.value)
    }
    const handleEmailBlur = event => {
      setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
      setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
      setConfirmPassword(event.target.value)
    }

    const handleSubmit = event => {
      event.preventDefault();
      console.log('clicked')
    }



    return (
        <Form onClick={handleSubmit} className='w-50 mx-auto my-5' id='form'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Your Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Accept Terms & Conditions" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Sign Up
  </Button>
</Form>
    );
};

export default SignUp;