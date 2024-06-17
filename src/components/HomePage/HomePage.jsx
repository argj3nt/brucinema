import React, { useRef, useState } from 'react';
import MovieImage from '../../assets/furiosa.jpg';
import Poster from '../../assets/peaky.jpg';
import './HomePage.css';

const HomePage = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollLeftBtn = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRightBtn = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <div className='mainhomepage'>
        <div className='image-container'>
          <h1 className='movietitle'>Furiosa</h1>
          <button className="btn">RÉSERVER</button>
          <img src={MovieImage} alt="movieimage" className="homepage-image" />
        </div>
      </div>

      <div className='films'>
        <h1 className='filmstitle'>FILMS</h1>
        <div className='subfilms'>
          <h3 className='categorys'>NOUVEAUTÉS</h3>
          <h3 className='categorys'>À L'AFFICHE</h3>
        </div>

        <div className='carousel-container'>
          <button className='scroll-btn left' onClick={scrollLeftBtn}>&lt;</button>
          <div 
            className='movieposter-container' 
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {[...Array(10)].map((_, index) => (
              <div className="movieposter-wrapper" key={index}>
                <div className="movieposter-image-wrapper">
                  <div className="movieposter-overlay">
                    <p className="movie-description"><button className="btn2">SÉANCES</button></p>
                  </div>
                  <img src={Poster} alt="poster" className='movieposter' />
                </div>
                <p className='moviet'>Peaky Blinders</p>
              </div>
            ))}
          </div>
          <button className='scroll-btn right' onClick={scrollRightBtn}>&gt;</button>
        </div>  
      </div>

      <div className='newsletter'>
        <h1 className='newstitle'>INSCRIVEZ-VOUS DÈS MAINTENANT !</h1>
        <div className="input-container">
          <p className='infonewsletter'>Je souhaite recevoir l'actualité cinéma et les meilleures offres BRUCINEMA.</p>
          <input type="email" placeholder="Entrez votre adresse e-mail *" className="email-input" />
          <button className="subscribe-btn">JE M'ABONNE</button>
          <p className='cobli'>* Champ obligatoire</p>
        </div>
      </div>

      <footer className='foot'>
        <ul>
          <li>BESOIN D'AIDE ?</li>
          <li>CONTACT</li>
          <li>BRUCINEMA</li>
          <li>GROUPE B.R.U</li>
          <li>BRU.BE</li>
          <li>POLITIQUE DE CONFIDENTIALITÉ</li>
          <li>CONDITIONS GÉNÉRALES</li>
          <li>MENTIONS LÉGALES</li>
          <li>COOKIES</li>
        </ul>
      </footer>
    </>
  );
}

export default HomePage;
