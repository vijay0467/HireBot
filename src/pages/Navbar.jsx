import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm p-4">
    <div className="container-fluid">
    <img 
          src="./src/assets/logo.jpg" 
          alt="Logo" 
          className="img-fluid rounded-circle" 
          style={{ width: '40px', height: '40px' }} 
        />
      <NavLink className="navbar-brand fs-3" to='/'>HireBot</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          {/* home page */}
          <li className="nav-item">
            <NavLink className="nav-link " to='/'>Home</NavLink>
          </li>
          {/* about page */}
          <li className="nav-item">
            <NavLink className="nav-link " to='/about'>About</NavLink>
          </li>
          {/* contactus page */}
          <li className="nav-item">
            <NavLink className="nav-link " to='/contactus'>ContactUs</NavLink>
          </li>
         {/* Pricing */}
          <li className="nav-item">
            <NavLink className="nav-link " to='/pricing'>Pricing</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to='/testselection'>TryourQuiz</NavLink>
          </li>
        </ul>
        <div className='nav-item'> 
        <button className='btn btn-outline-success rounded-pill  px-3 '><NavLink className="nav-link " to='/login'>Login</NavLink></button>
        </div>
        <div className='nav-item'> 
        <button className='btn btn-success rounded-pill  px-3 mx-2'><NavLink className="nav-link " to='/signup'>Signup</NavLink></button>
        </div>
      </div>
    </div>
  </nav>
    
  );
}

export default Navbar;
