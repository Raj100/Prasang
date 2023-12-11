import React from 'react'
import './Home.css'
import mandalaArt from '../Assets/abc.png';
import prasang1 from "../Assets/prasang-1.png";
import prasangText from "../Assets/prasang.png";
import prasang2 from "../Assets/prasang-2.png";


const Home = () => {
  return (
    <>
  <div className="home">
    <img className="mandala-art" src={mandalaArt} alt="" width="400" height="400"/>
    <img className="mandala-art-right" src={mandalaArt} alt=""width="400px" height="400"/>
    <div>
      <div className="logo">
        <img className="logo-1" src={prasang1} alt="" width= "250" height="200"/>
        <img className="logo-text" data-aos="fade-up" src={prasangText} alt="" width= "250" height="200"/>
        <img className="logo-2" src={prasang2}  alt="" width= "250" height="200"/>
      </div>
      <h1 className="center">Prasang</h1>
      <p className="center">Organised by EEE Department NIT GOA </p>
    </div>
  </div>
    </>
  )
}

export default Home
