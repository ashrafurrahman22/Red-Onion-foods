import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth,  {sendEmailVerification:true});

    let errorElement;
    if(error){
      errorElement = error.message;
    }

    if(user){
      navigate('/home')
      console.log('user', user);
    }

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

    const handleSubmit = (event) => {
      event.preventDefault();
      createUserWithEmailAndPassword(email, password);
    }



    return (
        <Form onClick={handleSubmit} className='w-50 mx-auto' id='form'>
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
    {/* <Form.Check type="checkbox" label="Accept Terms & Conditions" /> */}
  </Form.Group>
  {errorElement}
  <Button variant="primary" type="submit">
    Sign Up
  </Button>
  <SocialLogin></SocialLogin>
</Form>
    );
};

export default SignUp;