import React from 'react';
import footerLogo from '../../../images/logo2.png';
import './Footer.css'

const Footer = () => {
    return (
       <div id='footer'>
            <div className='footer-container'>
            <div className='mx-auto my-5'>
                <img className='footer-img' src={footerLogo} alt="" />
            </div>
            <div className='my-2'>
                <p><small>about online food</small></p>
                <p><small>Read our blog</small></p>
                <p><small>Sign up to deliver</small> </p>
                <p><small>Add your Restaurant</small></p>
            </div>
            <div className='my-2'>
                <p><small>Get Help</small> </p>
                <p><small>Read FAQs</small></p>
                <p><small>View all Cities</small></p>
                <p><small>Restaurant near me</small></p>
            </div>
            <div className='mx-auto text-danger my-2'>
            <p><small>Copyright @ 2022</small> </p>
        </div>
        <div>
            <p><small>Terms & Services</small></p>
        </div>
        <div>
            <p><small>Privacy & Policy</small></p>
        </div>
        </div>
        
       </div>
    );
};

export default Footer;