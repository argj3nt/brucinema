import React, { useState } from 'react';
import './Checkout.css';
import BeforeTicket from '../BeforeTicket/BeforeTicket';
import Payment from '../Payment/Payment';
import MoviePage from '../MoviePage/MoviePage';
import { Link } from 'react-router-dom';

const Checkout = ({ movieTitle, posterPath, cinemaName, salle }) => {
  const [step, setStep] = useState('beforeTicket');

  const handleNextStep = () => {
    setStep('payment');
  };

  return (
    <>
      <div className='maincheckout'>
       <Link to="/" className='checkouttitle'>BRUCINEMA</Link>
        {/* <div className='filmprevcheck'>
          <div className='filmcheckcontainer'>
            <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt='filmprev' className='filmprev' />
            <div className='filmcinfo'>
              <h3 className='h3film'>{movieTitle}</h3>
              <h4 className='h4sub'>{cinemaName}</h4>
              <h4 className='h4sub'>{salle}</h4>
            </div>
          </div>
        </div> */}
      </div>


      {step === 'beforeTicket' && <BeforeTicket onNextStep={handleNextStep} />}
      {step === 'payment' && <Payment />}
    </>
  );
};

export default Checkout;
