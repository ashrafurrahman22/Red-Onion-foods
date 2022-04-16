import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import webLogo from '../../../images/logo2.png';
import './Header.css'

const Header = () => {

  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth)
  }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand as={Link} to="/home">
      <img height={33} src={webLogo} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav className='gap-3'>
      <Nav.Link as={Link} to="/cart" className='text-dark'><FontAwesomeIcon icon={faCartShopping} /> </Nav.Link>
      {user ? <button onClick={handleSignOut} className='bg-danger text-white' id='signupbtn'>signout</button> : <div className='d-flex'>
      <Nav.Link as={Link}  to="/login">Login</Nav.Link> <Nav.Link id='signupbtn' className='bg-danger text-white' as={Link} to="/signup">
        SignUp
      </Nav.Link>
      </div> }
           
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;