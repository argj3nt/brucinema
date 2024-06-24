import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='regcontain'>
      <div className='loginforms'>
        <input type="email" placeholder="E-mail*" className="loginform email-input" />
        <input type="password" placeholder="Mot de passe*" className="loginform email-input" />
        <button className="loginbtn subscribe-btn">JE ME CONNECTE</button>
        <p className='cobli'>* Champ obligatoire</p>
      </div>
    </div>
  );
};

export default Login;
