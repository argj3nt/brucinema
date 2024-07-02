import React, { useState } from 'react';
import './Cinema.css';
import Cinepic from '../../assets/cinema.png';
import { FaCcApplePay, FaCreditCard } from "react-icons/fa";
import Checkout from '../Checkout/Checkout';
import { Link } from 'react-router-dom';


const Cinema = () => {
  const [activeCityIndex, setActiveCityIndex] = useState(null);
  const [activeDateIndex, setActiveDateIndex] = useState(null);

  const cities = ['BRUXELLES', 'CHARLEROI', 'NAMUR', 'MONS', 'ANVERS', 'BRUGES', 'LIÉGE'];

  const handleCityClick = (index) => {
    setActiveCityIndex(index);
    setActiveDateIndex(null); // Reset the active date when a new city is selected
  };

  const handleDateClick = (index) => {
    setActiveDateIndex(index);
  };

  const getNextFiveDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 5; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      days.push(nextDay.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }));
    }
    return days;
  };

  return (
    <div className='cinema-container'>
      <div className='cine'>
        <ul className='city-list'>
          {cities.map((city, index) => (
            <li 
              key={index} 
              className={activeCityIndex === index ? 'active' : ''} 
              onClick={() => handleCityClick(index)}
            >
              {city}
            </li>
          ))}
        </ul>

        {activeCityIndex !== null && (
          <ul className='date-list'>
            {getNextFiveDays().map((date, index) => (
              <li 
                key={index} 
                className={activeDateIndex === index ? 'active' : ''} 
                onClick={() => handleDateClick(index)}
              >
                {date}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='cinelist'>
        <img src={Cinepic} alt="cinema" className='cinefile' />
        <div className='seanceinfo'>
          <h2 className='bruevere'>BRUCINEMA EVERE</h2>
          <div className='iofcinema'>
            <h4 className='salles'>22 salles I Parking Privé</h4>
            <h4 className='salles'>Rue Saint-Vincent 17 <br/>1140 BRUXELLES</h4>
            <p className='cineicon'>
              <FaCcApplePay className='cineicon'/><FaCreditCard className='cineicon' />
            </p>
          </div>

          <div className='showtimes'>
          <div className='showtimes'>
            <div className='showtime-box'><Link to="/checkout">14:00</Link></div>
            <div className='showtime-box'><Link to="/checkout">18:00</Link></div>
            <div className='showtime-box'><Link to="/checkout">19:30</Link></div>
            <div className='showtime-box'><Link to="/checkout">22:00</Link></div>
          </div>
      </div>

        </div>
      </div>
      <div className='cinelist'>
        <img src={Cinepic} alt="cinema" className='cinefile' />
        <div className='seanceinfo'>
          <h2 className='bruevere'>BRUCINEMA EVERE</h2>
          <div className='iofcinema'>
            <h4 className='salles'>22 salles I Parking Privé</h4>
            <h4 className='salles'>Rue Saint-Vincent 17 <br/>1140 BRUXELLES</h4>
            <p className='cineicon'>
              <FaCcApplePay className='cineicon'/><FaCreditCard className='cineicon' />
            </p>
          </div>

          <div className='showtimes'>
          <div className='showtime-box'><Link to="/checkout">14:00</Link></div>
            <div className='showtime-box'><Link to="/checkout">18:00</Link></div>
            <div className='showtime-box'><Link to="/checkout">19:30</Link></div>
            <div className='showtime-box'><Link to="/checkout">22:00</Link></div>
          </div>

        </div>
      </div>
      <div className='cinelist'>
        <img src={Cinepic} alt="cinema" className='cinefile' />
        <div className='seanceinfo'>
          <h2 className='bruevere'>BRUCINEMA EVERE</h2>
          <div className='iofcinema'>
            <h4 className='salles'>22 salles I Parking Privé</h4>
            <h4 className='salles'>Rue Saint-Vincent 17 <br/>1140 BRUXELLES</h4>
            <p className='cineicon'>
              <FaCcApplePay className='cineicon'/><FaCreditCard className='cineicon' />
            </p>
          </div>

          <div className='showtimes'>
          <div className='showtime-box'><Link to="/checkout">14:00</Link></div>
            <div className='showtime-box'><Link to="/checkout">18:00</Link></div>
            <div className='showtime-box'><Link to="/checkout">19:30</Link></div>
            <div className='showtime-box'><Link to="/checkout">22:00</Link></div>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Cinema;
