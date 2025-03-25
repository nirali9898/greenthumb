import React from 'react';
import './Header.css'; // Importing CSS for styling
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '6px', backgroundColor: '' }}>
      <div className="header-container">
        <div className="header-link">
          <Link to="/">Home</Link>
          <Link to="/Plants">Plants</Link>
          <Link to="/Gallary">Gallary</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;