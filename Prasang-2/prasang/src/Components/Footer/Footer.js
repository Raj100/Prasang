// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <h3>Contact Us</h3>
          <a href="mailto:prasang@nitgoa.ac.in">
            <i className="fa fa-envelope" aria-hidden="true"></i>prasang@nitgoa.ac.in
          </a>
          <h3>Follow Us</h3>
          <ul className="social">
            <li><a href=""><i className="fab fa-facebook"></i></a></li>
            <li><a href=""><i className="fab fa-twitter"></i></a></li>
            <li><a href=""><i className="fab fa-instagram"></i></a></li>
            <li><a href=""><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
        <div>
          <h3>Reach Us</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3846.3486149295613!2d73.9780278!3d15.4117245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba54fee1f1cd%3A0xea0a4948645fa299!2sNational%20Institute%20of%20Technology%20Goa!5e0!3m2!1sen!2sin!4v1702213282108!5m2!1sen!2sin"
            width="400" height="300" style={{ border: '0' }} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <div className="bottom">
        <p>Made with ❤️ Team Prasang</p>
      </div>
    </footer>
  );
};

export default Footer;
