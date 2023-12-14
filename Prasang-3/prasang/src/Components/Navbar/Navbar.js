import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
  <header>
    <h1 class="logo-top">Pra<span>S</span>ang</h1>
    <div class="navigation">
      <a href='#Home'><li>Home</li></a>
      <a href='#Workshops'><li>Workshops</li></a>
      <a href="#Competitions"><li>Events</li></a>
      <a href='#Welcome'><li>Contact us</li></a>
    </div>
  </header>
    </>
  )
}

export default Navbar
