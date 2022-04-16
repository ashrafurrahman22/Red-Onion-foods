import React, { } from 'react';
import { Carousel, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../images/bannerbackground.png';
import './Home.css'
import breakfast1 from '../../images/breakfast/breakfast1.png';
import breakfast2 from '../../images/breakfast/breakfast2.png';
import breakfast3 from '../../images/breakfast/breakfast3.png';
import breakfast4 from '../../images/breakfast/breakfast4.png';
import breakfast5 from '../../images/breakfast/breakfast5.png';
import breakfast6 from '../../images/breakfast/breakfast6.png';
import BreakFast from './Breakfast/BreakFast';
import lunch1 from '../../images/lunch/lunch1.png';
import lunch2 from  '../../images/lunch/lunch2.png';
import lunch3 from  '../../images/lunch/lunch3.png';
import lunch4 from  '../../images/lunch/lunch4.png';
import lunch5 from  '../../images/lunch/lunch5.png';
import lunch6 from  '../../images/lunch/lunch6.png';
import dinne1 from '../../images/dinner/dinner1.png';
import dinne2 from '../../images/dinner/dinner2.png';
import dinne3 from '../../images/dinner/dinner3.png';
import dinne4 from '../../images/dinner/dinner4.png';
import dinne5 from '../../images/dinner/dinner5.png';
import dinne6 from '../../images/dinner/dinner6.png';


const Home = () => {

  const meals = [
    {id: 1, name: 'Eggs Fry', price: 20, img : breakfast1},
    {id: 2, name: 'Butter with eggs', price: 22, img : breakfast2},
    {id: 3, name: 'Cake', price: 25, img : breakfast3},
    {id: 4, name: 'Eggs with Salad', price: 15, img : breakfast4},
    {id: 5, name: 'Eggs with butter', price: 12, img : breakfast5},
    {id: 6, name: 'Fried Eggs combo', price: 10, img : breakfast6},

    {id: 7, name: 'Fried Eggs combo', price: 26, img : lunch1},
    {id: 8, name: 'Fried Eggs combo', price: 34, img : lunch2},
    {id: 9, name: 'Fried Eggs combo', price: 50, img : lunch3},
    {id: 10, name: 'Fried Eggs combo', price: 40, img : lunch4},
    {id: 11, name: 'Fried Eggs combo', price: 20, img : lunch5},
    {id: 12, name: 'Fried Eggs combo', price: 30, img : lunch6},

    {id: 13, name: 'Fried Eggs combo', price: 30, img : dinne1},   
    {id: 14, name: 'Fried Eggs combo', price: 30, img : dinne2},   
    {id: 15, name: 'Fried Eggs combo', price: 30, img : dinne3},   
    {id: 16, name: 'Fried Eggs combo', price: 30, img : dinne4},   
    {id: 17, name: 'Fried Eggs combo', price: 30, img : dinne5},   
    {id: 18, name: 'Fried Eggs combo', price: 30, img : dinne6}   
  ]

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
      <div className='d-flex justify-content-center my-3'>
      <Nav.Link href="home#breakfast">Breakfast</Nav.Link>
      <Nav.Link href="home#lunch">Lunch</Nav.Link>
      <Nav.Link href="home#dinner">Dinner</Nav.Link>
        
      </div>

      <div id='breakfast'>
        <h3 className='text-center mt-3'>BreakFast</h3>
        <div id='meal-container'>
        
        {
          meals.slice(0, 6).map(meal => <BreakFast
          key={meal.id}
          meal = {meal}
          ></BreakFast> )
        }
      </div>
      </div>
      <div id='lunch'>
        <h3 className='text-center my-2'>Lunch</h3>
      <div id='meal-container'>
        {
          meals.slice(6, 12).map(meal => <BreakFast
          key={meal.id}
          meal = {meal}
          ></BreakFast> )
        }
      </div>
      </div>
      <div id='dinner'>
        <h3 className='text-center my-2'>Dinner</h3>
      <div id='meal-container'>
        {
          meals.slice(12, 18).map(meal => <BreakFast
          key={meal.id}
          meal = {meal}
          ></BreakFast> )
        }
      </div>
      </div>
        </div>
    );
};

export default Home;