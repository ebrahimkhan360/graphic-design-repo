import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css'
const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>Service Details: {serviceId}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-info'>Proceed Checkout</button>
                </Link>
            </div>

            <div className='grapich-detail'>
                <h1>Graphic: </h1>
                <h4>Hi!! Welcome!!!</h4>
                <p></p>
            </div>
        </div>
    );
};

export default ServiceDetail;