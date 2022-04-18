import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices]= useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data =>setServices(data));
    },[])
    return (
        <div  className='container'>
            <div id="services" className='services-titel'>
            <h1>Our Services</h1>
            </div>
           <div className='services-contain'>
           {
                services.map(service => <Service
                key={service.id}
                service={service}
                >

                </Service>)
            }
           </div>
        </div>
    );
};

export default Services;