import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <a href="#"><i className='bx bxl-instagram-alt'></i></a>
        <a href="#"><i className='bx bxl-pinterest'></i></a>
        <a href="#"><i className='bx bxl-youtube'></i></a>
        <a href="#"><i className='bx bxl-linkedin-square'></i></a>
      </div>
      <ul className="list">
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Privacy</a></li>
      </ul>
      <p className="copyright">Chingu & Coffee Copyright: Felicia Mayeyane</p>
    </footer>
  );
}

export default Footer;
