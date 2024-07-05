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
          <Link to="/"><li className='nav-item'><FiSearch className='icon' />RECHERCHER</li></Link>
          <Link to="/"> <li className='nav-item'><FiUser className='icon' />MON COMPTE</li></Link>
          <Link to="/"> <li className='nav-item'><FiUsers className='icon' />RECRUTEMENT</li></Link>
          <Link to="/"> <li className='nav-item'><FiBriefcase className='icon' />ESPACE PRO</li></Link>
          <Link to="/"> <li className='nav-item'><FiUmbrella className='icon' />LE MAG DE LA SEMAINE</li></Link>
          </ul>
        </div>
      </div>
      <div className='smainheader'>
        <div className='sheader'>
          <ul>
            <Link to="/"><li className='snav-item'>CINÉMAS</li></Link>
            <Link to="/"><li className='snav-item'>FILMS</li></Link>
            <Link to="/"><li className='snav-item'>NOS OFFRES !</li></Link>
            <Link to="/"><li className='snav-item'>NOS PARTENAIRES !</li></Link>
            <Link to="/"><li className='snav-item'></li></Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header;
