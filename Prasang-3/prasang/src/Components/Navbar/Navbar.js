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
        <h1 className="logo-top"><span>P</span><span>R</span><span>A</span><span>S</span><span>A</span><span>N</span><span>G</span></h1>
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
