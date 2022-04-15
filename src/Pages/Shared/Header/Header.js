import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import webLogo from '../../../images/logo2.png';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand as={Link} to="/">
      <img height={33} src={webLogo} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav className='gap-3'>
      <Nav.Link as={Link} to="/cart" className='text-dark'><FontAwesomeIcon icon={faCartShopping} /> </Nav.Link>
      <Nav.Link as={Link}  to="/login">Login</Nav.Link>
      <Nav.Link id='signupbtn' className='bg-danger text-white' as={Link} to="/signup">
        SignUp
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;