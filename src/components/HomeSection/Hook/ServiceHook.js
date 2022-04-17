import React, { useEffect, useState } from 'react';

const ServiceHook = () => {
    const [services, setServices] = useState([])

    useEffect( () => {
        fetch(`service.json`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return [services, setServices]
};

export default ServiceHook;