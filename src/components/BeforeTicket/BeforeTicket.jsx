import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Payment from '../Payment/Payment';

const BeforeTicket = () => {
  const [activeComponent, setActiveComponent] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const handleSuccessfulSubscribe = () => {
    setActiveComponent('payment');
    setIsLoggedIn(true);
  };

  return (
    <div className='before-ticket-container'>
      {!isLoggedIn && (
        <div className='checkoutbutton'>
          <button onClick={() => handleButtonClick('login')} className='btn-common loginbutt'>JE M'IDENTIFIE</button>
          <button onClick={() => handleButtonClick('register')} className='btn-common loginbutt'>JE CRÉE UN COMPTE</button>
        </div>
      )}
      
      {!isLoggedIn && <hr className='red-underline' />}

      {activeComponent === 'login' && <Login onSuccessfulSubscribe={handleSuccessfulSubscribe} />}
      {activeComponent === 'register' && <Register onSuccessfulSubscribe={handleSuccessfulSubscribe} />}
      {activeComponent === 'payment' && <Payment />}
    </div>
  );
};

export default BeforeTicket;
