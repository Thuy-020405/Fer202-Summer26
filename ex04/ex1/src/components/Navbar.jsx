import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link className="navbar-brand p-2" to="/" style={{ backgroundColor: '#2ecc71' }}>
          Home
        </Link>
        
        <div className="navbar-nav me-auto">
          <Link className="nav-link" to="/search">Search</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </div>

      
        <div className="navbar-nav">
          <Link className="nav-link btn btn-dark text-white px-3" to="/login" style={{ backgroundColor: 'black' }}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;