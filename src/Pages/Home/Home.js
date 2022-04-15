import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../images/bannerbackground.png';
import './Home.css'

const Home = () => {
    return (
        <div>
           <Carousel id='carousel' className=' mx-auto'>
    <img
      className="d-block w-100 img-fluid"
      src={banner}
      alt=""
    />
    <Carousel.Caption id='carousel-caption'>
      <h3 className='text-black'>Best Food is Waiting For Your Belly</h3>
      <input type="text"  placeholder='search'/> 
      <label id='searchbtn' className='text-dark ms-2 bg-danger px-3 py-2 text-white' htmlFor="search">Search</label>
    </Carousel.Caption>
  
</Carousel>
        </div>
    );
};

export default Home;