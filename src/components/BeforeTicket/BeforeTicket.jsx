import React, { useState } from 'react';
import './BeforeTicket.css'; // Assuming you have CSS for BeforeTicket styling
import Login from '../Login/Login';
import Register from '../Register/Register';
import Payment from '../Payment/Payment';

const BeforeTicket = () => {
  const [activeComponent, setActiveComponent] = useState('');

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const handleSuccess = () => {
    setActiveComponent('payment'); // Switch to Payment component after successful login or registration
  };

  return (

    <div className='before-ticket-container'>
      
      <div className='checkoutbutton'>
        <button className={`btn-common loginbutt ${activeComponent === 'login' ? 'active' : ''}`}
          onClick={() => handleButtonClick('login')}
        >
          <h4 className='h4ins'>JE M'IDENTIFIE</h4>
        </button>
        
        <button
          className={`btn-common registerbutt ${activeComponent === 'register' ? 'active' : ''}`}
          onClick={() => handleButtonClick('register')}
        >
          <h4 className='h4ins'>JE CRÉE UN COMPTE</h4>
        </button>
      </div>
      <hr className='red-underline' />
      {activeComponent === 'login' && <Login onSuccess={handleSuccess} />}
      {activeComponent === 'register' && <Register onSuccess={handleSuccess} />}
      {activeComponent === 'payment' && <Payment />}
      
    </div>
  );
};

export default BeforeTicket;
