import React from 'react';
import './Payment.css';
import { FaCcMastercard } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";

const Payment = () => {
  return (
    <>
      <div className='payment'>
        <h1 className='h1payment'>PAIEMENT</h1>
        <hr className='red-underline'></hr>
      </div>

      <div className='payment-form'>
      <div className='logobank'>
      <h3 className='h3cb'>Carte bancaire</h3>
      <div className='bbb'>
        <FaCcMastercard className='iconmaster' />
        <RiVisaLine className='iconmaster' />
        </div>
        </div>
        
        <div className='input-group'>
          <label htmlFor='card-number'>Numéro de carte</label>
          <input type='text' id='card-number' name='card-number' placeholder='0000 0000 0000 0000' />
        </div>
        <div className='input-group'>
          <label htmlFor='expiry-date'>Date d'expiration</label>
          <input type='text' id='expiry-date' name='card-number' placeholder='MM/AA' />
        </div>
        <div className='input-group'>
          <label htmlFor='cvv'>CVV</label>
          <input type='text' id='cvv' name='card-number' placeholder='NNN' />
        </div>
        <div className='finalpay'>
      <button className='paybtn buy-button'>PAYER</button>
      </div>
      </div>
      
    </>
  );
};

export default Payment;
