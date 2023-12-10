import React from 'react'
import Image from 'next/image'
import './Home.css'

const Home = () => {
  return (
    <>
        <div className="home">
        <Image width={500} height={500} className="mandala-art" src="/Assets/abc.png" alt="mandala-art"/>
        <Image width={500} height={500} className="mandala-art-right" src="/abc.png" alt="mandala-art"/>
        <div className="logo">
            <svg className="logo" width="2000" height="1607" viewBox="0 0 2000 1607">
            </svg>
        </div>
        <p className='center'>EEE Department NIT Goa</p>
        <p className='center'>Organised by EEE Department NIT GOA</p>
        <img className="elephant-left" src="./Assets/RXNqiur2_400x400.png" alt=""/>
    </div>
    </>
  )
}

export default Home
