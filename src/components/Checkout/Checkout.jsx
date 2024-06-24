import React from 'react'
import './Checkout.css'

const Checkout = () => {
  return (
    <div className='maincheckout'>
        <h1 className='checkouttitle'>BRUCINEMA</h1>
        
        <div className='checkoutbutton'>
        <button className='btn-common loginbutt'>JE M'IDENTIFIE</button>
        <button className='btn-common registerbutt'>JE CRÉE UN COMPTE</button>
        
        </div>
        <hr className='red-underline'/>
    </div>
  )
}

export default Checkout
