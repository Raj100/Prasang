import React from 'react'
import Merch from '../Assets/Merchandise.jpg'
import "./Merchandise.css"
const Merchandise = () => {
  return (
    <div className='merchandise' id='Merchandize'>
      <div className='Merch-top spacer'></div>
      <h1 className='center'>Buy Merch</h1>
      <img className='center' src={Merch} alt="" />
    </div>
  )
}

export default Merchandise
