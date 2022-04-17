import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg sticky-top">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" href="#home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/services' className="nav-link" href="home#services">Services</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link" href="#">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link id='login' to='/' className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link id='register' to='/' className="nav-link">Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;