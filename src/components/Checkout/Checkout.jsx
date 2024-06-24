import React, { useState } from 'react';
import './Checkout.css';
import Poster from '../../assets/peaky.jpg';
import Login from '../Login/Login';
import Register from '../Register/Register';
import BeforeTicket from '../BeforeTicket/BeforeTicket';
import { IoTicket } from "react-icons/io5";


const Checkout = () => {

  return (
    <div className='maincheckout'>
      <h1 className='checkouttitle'>BRUCINEMA</h1>
      <div className='filmprevcheck'>
        <div className='filmcheckcontainer'>
          <img src={Poster} alt='filmprev' className='filmprev'></img>
          <div className='filmcinfo'>
            <h3 className='h3film'>Peaky Blinders</h3>
            <h4 className='h4sub'>BRUCINEMA EVERE</h4>
            <h4 className='h4sub'>Salle 12</h4>
          </div>
        </div>
      </div>
      <div className='tarifsprice'>
        <h1 className='h3tarif'>TARIFS<IoTicket className='ticketicon' /></h1>
        
      </div>
      <hr className='red-underline'></hr>
    </div>
  );
};

export default Checkout;
