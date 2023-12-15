import React from 'react'
import Merch from '../Assets/Merchandise.jpg'
const Merchandise = () => {
  return (
    <div className='merchandise'>
      <h1 className='center'>Buy Merch</h1>
      <img className='center' src={Merch} alt="" />
    </div>
  )
}

export default Merchandise
