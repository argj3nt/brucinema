import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

const BeforeTicket = () => {

    const [activeComponent, setActiveComponent] = useState(''); // État pour gérer le composant actif

  const handleButtonClick = (component) => {
    setActiveComponent(component); // Met à jour l'état pour afficher le composant spécifié
  };

  return (
    <div>
      <div className='checkoutbutton'>
        <button
          className={`btn-common loginbutt ${activeComponent === 'login' ? 'active' : ''}`}
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

      {activeComponent === 'login' && <Login />} {/* Rend le composant Login si l'état est 'login' */}
      {activeComponent === 'register' && <Register />} {/* Rend le composant Register si l'état est 'register' */}
    </div>
  )
}

export default BeforeTicket
