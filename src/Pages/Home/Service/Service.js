import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const{id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
            navigate(`/service/${id}`);
    }
    return (
        <div className='cart-sizing'>
            <img className='card-img' src={img} alt=""/>
            <h2>{name} </h2>
            <p> {price}</p>
            <p>{description}</p>
            <button onClick ={() => navigateToServiceDetail(id)} className='button-style'>Order Now</button>
        </div>
    );
};

export default Service;