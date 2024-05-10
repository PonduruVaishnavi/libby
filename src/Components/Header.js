import './Header.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${showMenu ? 'active' : ''}`}></div>
        <div className={`bar ${showMenu ? 'active' : ''}`}></div>
        <div className={`bar ${showMenu ? 'active' : ''}`}></div>
      </div>
      <div className="logo"><b>Library App</b></div>
      <nav className={showMenu ? 'active' : ''}>
      <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/books" onClick={toggleMenu}>Books</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
      <div className="cta">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    </header>
  );
}

export default Header;
