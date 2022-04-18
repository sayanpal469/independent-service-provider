import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Navbar.css'

const Navbar = () => {

    const [user] = useAuthState(auth)

    const logout = () => {
      signOut(auth);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
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
          <Link to='/checkOut' className="nav-link" href="#">Check Out</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          {
            user ? <Link onClick={logout} id='login' to='/login' className="nav-link">Log Out</Link>
            :
            <Link id='login' to='/login' className="nav-link">Login</Link>
          }
        </li>
        <li className="nav-item">
          <Link id='register' to='/register' className="nav-link">Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;