import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {ServiceId} = useParams();
    return (
        <div>
            <h2>Ami parchi: {ServiceId} </h2>
        </div>
    );
};

export default ServiceDetail;