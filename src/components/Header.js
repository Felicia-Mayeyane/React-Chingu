import React from 'react';

function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">
        Chingu &<span>Coffee</span>
      </a>
      <i className='bx bx-menu' id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About Us</a>
        <a href="#coffee">Coffees</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
