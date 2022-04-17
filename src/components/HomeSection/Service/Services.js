import React from 'react';
import ServiceHook from '../Hook/ServiceHook';
import Service from './Service';

const Services = () => {
    const [services, setServices] = ServiceHook()


    return (
        <div className=''>
            <h1 className='text-center my-5 text-primary'>My Services</h1>
            <div className='row px-5'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
           </div>
    );
};

export default Services;