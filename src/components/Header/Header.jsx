import React from 'react';
import './Header.css';
import { FiSearch, FiUser, FiUsers, FiBriefcase, FiUmbrella } from "react-icons/fi";
import { Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

const Header = () => {
  return (
    <>
      <div className='mainheader'>
        <div className='header'>
          
          <Link to="/" className='title'>BRUCINEMA</Link>
      
          <ul>
            <li className='nav-item'><FiSearch className='icon' />RECHERCHER</li>
            <li className='nav-item'><FiUser className='icon' />MON COMPTE</li>
            <li className='nav-item'><FiUsers className='icon' />RECRUTEMENT</li>
            <li className='nav-item'><FiBriefcase className='icon' />ESPACE PRO</li>
            <li className='nav-item'><FiUmbrella className='icon' />LE MAG DE LA SEMAINE</li>
          </ul>
        </div>
      </div>
      <div className='smainheader'>
        <div className='sheader'>
          <ul>
            <li className='snav-item'>CINÉMAS</li>
            <li className='snav-item'>FILMS</li>
            <li className='snav-item'>NOS OFFRES !</li>
            <li className='snav-item'>NOS PARTENAIRES !</li>
            <li className='snav-item'></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header;
