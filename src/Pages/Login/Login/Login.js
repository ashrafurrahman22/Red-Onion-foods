import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import './Login.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, loading2, error2] = useSendPasswordResetEmail(auth);

    if(user){
      // navigate('/')
      navigate( from, { replace: true });
      console.log('user', user)
    }

    const handleEmailBlur = event => {
      setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
      setPassword(event.target.value)
    }

    const handleSubmit = event => {
      event.preventDefault();
      signInWithEmailAndPassword(email, password)
      console.log('clicked')
    }
    const handleResetPassword = async () => {
      if(email){
      await sendPasswordResetEmail(email)
      toast('sending-email')
      }
      else{
        toast('Please Enter Your Email')
      }
    }

    return (
        <Form onClick={handleSubmit} className='w-50 mx-auto mt-5 mb-5' id='form'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password"  required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    {/* <Form.Check type="checkbox" label="Accept Terms & Conditions" /> */}
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
  <div>

    <p className='d-inline'>Forget Password?</p>
    <button onClick={handleResetPassword} className='btn ms-2 text-decoration-none btn-link my-2'>Reset Password</button>
  </div>
  <SocialLogin></SocialLogin>
  <ToastContainer></ToastContainer>
</Form>
    );
};

export default Login;