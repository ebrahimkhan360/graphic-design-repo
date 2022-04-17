import React from 'react';
import './Service.css'
const Service = ({service}) => {
    const{ name, img, description, price} = service;
    return (
        <div className='cart-sizing'>
            <img className='card-img' src={img} alt=""/>
            <h2>{name} </h2>
            <p> {price}</p>
            <p> <small/>{description}</p>
            <button className='button-style'>Order Now</button>
        </div>
    );
};

export default Service;