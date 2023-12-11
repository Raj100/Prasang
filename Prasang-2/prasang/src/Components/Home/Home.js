import React from 'react'
import Image from 'next/image'
import './Home.css'
import Link from 'next/link';
import mandalaArt from '/public/Assets/abc.png';
import prasang1 from "/public/Assets/prasang-1.png";
import prasangText from "/public/Assets/prasang.png";
import prasang2 from "/public/Assets/prasang-2.png";
const Home = () => {
  return (
    <>
  <div className="home">
    <Image className="mandala-art" src={mandalaArt} alt="" width="400" height="400"/>
    <Image className="mandala-art-right" src={mandalaArt} alt=""width="400px" height="400"/>
    <div>
      <div className="logo">
        <Image className="logo-1" src={prasang1} alt="" width= "250" height="200"/>
        <Image className="logo-text" data-aos="fade-up" src={prasangText} alt="" width= "250" height="200"/>
        <Image className="logo-2" src={prasang2}  alt="" width= "250" height="200"/>
      </div>
      <h1 className="center">Prasang</h1>
      <p className="center">Organised by EEE Department NIT GOA </p>
    </div>
  </div>
    </>
  )
}

export default Home
