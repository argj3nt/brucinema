import React, { useState } from 'react';
import './Register.css';

const Register = ({ onSuccessfulSubscribe }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setShowAlert(false);
  };

  const handleSubscribe = () => {
    if (!email) {
      alert('Veuillez entrer une adresse e-mail valide.');
      return;
    }

    if (isChecked) {
      alert('Vous êtes maintenant abonné !');
      // Réinitialisation du formulaire après l'abonnement réussi
      setEmail('');
      setIsChecked(false);

      // Appel de la fonction parent pour changer de page
      onSuccessfulSubscribe();
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div className='regcontain'>
      <div className="input-container">
        {showAlert && (
          <p className="alert-message">Veuillez accepter les conditions générales avant de continuer</p>
        )}
        <p className='infonewsletter'>
          Vous pourrez ainsi gérer facilement vos futures réservations,<br></br>
          votre Programme fidélité BRUCINEMA, vos inscriptions newsletters,
          vos cinémas favoris...
        </p>
        <input
          type="email"
          placeholder="Entrez votre adresse e-mail *"
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="subscribe-btn" onClick={handleSubscribe}>
          JE M'ABONNE
        </button>
        
        <p className='cobli'>* Champ obligatoire</p>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          J'accepte les conditions générales
        </label>
        
      </div>
    </div>
  );
};

export default Register;
