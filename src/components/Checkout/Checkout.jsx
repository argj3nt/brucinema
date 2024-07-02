import React, { useState } from 'react';
import './Checkout.css';
import Poster from '../../assets/peaky.jpg';
import BeforeTicket from '../BeforeTicket/BeforeTicket';
import Payment from '../Payment/Payment';

const Checkout = () => {
  const [step, setStep] = useState('beforeTicket');

  const handleNextStep = () => {
    setStep('payment');
  };

  return (
    <>
      <div className='maincheckout'>
        <h1 className='checkouttitle'>BRUCINEMA</h1>
        <div className='filmprevcheck'>
          <div className='filmcheckcontainer'>
            <img src={Poster} alt='filmprev' className='filmprev' />
            <div className='filmcinfo'>
              <h3 className='h3film'>Peaky Blinders</h3>
              <h4 className='h4sub'>BRUCINEMA EVERE</h4>
              <h4 className='h4sub'>Salle 12</h4>
            </div>
          </div>
        </div>
      </div>

      {step === 'beforeTicket' && <BeforeTicket onNextStep={handleNextStep} />}
      {step === 'payment' && <Payment />}
    </>
  );
};

export default Checkout;
