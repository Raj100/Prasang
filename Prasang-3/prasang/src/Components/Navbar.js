import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      var header = document.querySelector("header");

      if (header) {
        header.classList.toggle('sticky', window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <a href="/#Home"><h1 className="logo-top">PRASANG</h1></a>
        {/* <i class="fa fa-bars menu menu-icon" aria-hidden="true"></i> */}
        <div className="navigation">
          <a href='/#Home'><li>Home</li></a>
          <a href='/#Workshops'><li>Workshops</li></a>
          <a href="/#Events"><li>Events</li></a>
          <a href='/'><li>Contact us</li></a>
        </div>
      </header>
    </>
  );
}

export default Navbar;
