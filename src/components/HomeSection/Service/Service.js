import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {picture, balance, name, description} = service
    return (
        <div className="text-center mx-auto mb-5 card col-lg-3 m-3 col-md-6 col-sm-12 col-12 border-0 shadow" style={{width: '18rem'}}>
        <img src={picture} className="card-img-top img-fluid" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{balance}</p>
          <Link to="/checkOut" className="btn btn-primary">Check Out</Link>
        </div>
      </div>
    );
};

export default Service;