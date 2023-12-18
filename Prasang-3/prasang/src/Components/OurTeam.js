import React from 'react'
import Navbar from './Navbar'
import "./OurTeam.css"
import raju from "../Assets/Code Combat.png"
const OurTeam = () => {
  return (
    <div className='Our-Team'>
      <Navbar></Navbar>
      <h1 className='center'>Our Team</h1>
      <div className='Organisers' >
        <div className='profile'>
            <img src={raju} alt="" className='profile-photo'/>
            <h2>Name Surname</h2>
            <h4>position</h4>
        </div>
        <div className='profile'>
            <img src={raju} alt="" className='profile-photo'/>
            <h2>Name Surname</h2>
            <h4>position</h4>
        </div>
        <div className='profile'>
            <img src={raju} alt="" className='profile-photo'/>
            <h2>Name Surname</h2>
            <h4>position</h4>
        </div>
        <div className='profile'>
            <img src={raju} alt="" className='profile-photo'/>
            <h2>Name Surname</h2>
            <h4>position</h4>
        </div>
        <div className='profile'>
            <img src={raju} alt="" className='profile-photo'/>
            <h2>Name Surname</h2>
            <h4>position</h4>
        </div>
        <div className='profile'>
            <img src={raju} alt="" className='profile-photo'/>
            <h2>Name Surname</h2>
            <h4>position</h4>
        </div>
        <div className='profile'>
            <img src={raju} alt="" className='profile-photo'/>
            <h2>Name Surname</h2>
            <h4>position</h4>
        </div>
        <div className='profile'>
            <img src={raju} alt="" className='profile-photo'/>
            <h2>Name Surname</h2>
            <h4>position</h4>
        </div>
        <div className='profile'>
            <img src={raju} alt="" className='profile-photo'/>
            <h2>Name Surname</h2>
            <h4>position</h4>
        </div>
      </div>
      <div className='Media' ></div>
      <div className='Technical and Website' ></div>
      <div className='Technical and Website' ></div>
      <div className='Technical and Website' ></div>
    </div>
  )
}

export default OurTeam
