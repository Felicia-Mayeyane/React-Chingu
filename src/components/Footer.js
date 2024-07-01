import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <a href="#insta"><i className='bx bxl-instagram-alt'></i></a>
        <a href="#pint"><i className='bx bxl-pinterest'></i></a>
        <a href="#youtube"><i className='bx bxl-youtube'></i></a>
        <a href="#linkedin"><i className='bx bxl-linkedin-square'></i></a>
      </div>
      <ul className="list">
        <li><a href="#">FAQ</a></li>
        <li><a href="#coffee">Products</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#homee">Privacy</a></li>
      </ul>
      <p className="copyright">Chingu & Coffee Copyright: Felicia Mayeyane</p>
    </footer>
  );
}

export default Footer;
