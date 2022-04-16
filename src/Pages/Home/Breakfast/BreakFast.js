import React from 'react';
import { Link } from 'react-router-dom';
import './BreakFast.css'

const BreakFast = ({meal}) => {
    const {name, img, price}= meal;
    return (
        <div className='single-meal'>
            <img className='img-fluid' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button className='btn my-2 btn-primary'>
                <Link to='/singleMeals' className='text-white text-decoration-none'>Order Now</Link>
            </button>
        </div>
    );
};

export default BreakFast;