import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {picture, balance, category} = service
    return (
        <div class="text-center card col-lg-4 m-3 col-md-6 col-sm-12 col-12 border-0 shadow" style={{width: '18rem'}}>
        <img src={picture} class="card-img-top img-fluid" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{category}</h5>
          <p class="card-text">{balance}</p>
          <Link to="/checkOut" class="btn btn-primary">Check Out</Link>
        </div>
      </div>
    );
};

export default Service;