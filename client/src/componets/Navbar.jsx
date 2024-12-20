import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Store/auth';


function Navbar() {

  const {isLoggedIn} = useAuth();
  return (
    <>
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><i className="fa-solid fa-b"> J Nakum 13 </i></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0  fw-bold">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        {
          isLoggedIn ?(<li className="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
        ):(<>
        <li className="nav-item">
        <NavLink className="nav-link" to="/register">Registration</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      
      </>
)}       
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
