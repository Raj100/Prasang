import React from 'react';
import "./Footer.css"
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
            <li><a href="/"><i className="fab fa-facebook"></i></a></li>
            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/tesla_nitg/"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/company/teslanitg/"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>

        <div className='col'>
          <h3>Reach Us</h3>
          <iframe
            title="Nit goa"
            src=""
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
