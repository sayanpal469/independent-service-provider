import React from 'react';
import ServiceHook from '../Hook/ServiceHook';
import Service from './Service';

const Services = () => {
    const [services, setServices] = ServiceHook()


    return (
        <div className=''>
            <h1>This is card</h1>
            <div className='row px-5'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
           </div>
    );
};

export default Services;