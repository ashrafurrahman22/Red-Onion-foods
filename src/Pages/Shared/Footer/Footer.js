import React from 'react';
import footerLogo from '../../../images/logo2.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
                <img className='footer-img' src={footerLogo} alt="" />
            </div>
            <div>
                <p>about online food</p>
                <p>Read our blog</p>
                <p>Sign up to deliver</p>
                <p>Add your Restaurant</p>
            </div>
            <div>
                <p>Get Help</p>
                <p>Read FAQs</p>
                <p>View all cities</p>
                <p>Restaurant Near me</p>
            </div>
        </div>
    );
};

export default Footer;