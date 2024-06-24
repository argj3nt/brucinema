import React, { useRef, useState } from 'react';
import Poster from '../../assets/peaky.jpg';
import './MoviePage.css';
import { FaReply } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Cinema from '../Cinema/Cinema';

const MoviePage = () => {
    const title = "Peaky Blinders"; // Titre initial que vous pouvez remplacer plus tard par une valeur d'API
    const releaseDate = "16 mai 2002";
    const productions = "Tiger Aspect Productions";
    const synopsis = " Tommy Shelby est un vétéran décoré de la Première Guerre mondiale. Avec sa fratrie, il est à la tête d'un gang, les Peaky Blinders, ainsi nommés, car ils dissimulent des lames de rasoir dans les visières de leurs casquettes pour aveugler ou réduire au silence les témoins de leurs actes."

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
            <div className='movcontain'>
                <div className='ico'>
                    <FaReply className='repicon' /> ACCUEIL I FILMS
                </div>
                <div className='movdesc'>
                    <img src={Poster} alt="poster" className='movpic' />
                    <div className='movinfos'>
                        <h1 className='movtitle'>{title}</h1>
                        <div className='movieallinfos'>
                            <h3 className='movinf'><span className='datesortie'>Sortie le</span> {releaseDate}</h3>
                            <h3 className='movinf'><span className='produ'>De</span> {productions}</h3>
                            <h3 className='movinf'><span className='synopsis'>Synopsis</span>{synopsis} </h3>

                            <div className='bottomcat'>
                            <button className="wtw-btn">OÙ REGARDER ?</button>
                            <div className='watchlist'>
                                <FaPlus className='circleicon' /> AJOUTER CE FILM A MES FAVORIS 
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='ourcinema'>
                <h1 className='rc'>NOS CINÉMAS</h1>
            </div>

            <Cinema />


            <div className='recomand'>
                <h1 className='rc'>NOS RECOMMANDATIONS</h1>

                <div className='carousel-container'>
          <button className='scroll-btn left' onClick={scrollLeftBtn}><FaAngleLeft className='faricon' /></button>
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
          <button className='scroll-btn right' onClick={scrollRightBtn}><FaAngleRight className='faricon' /></button>
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

            
            
        </>
    );
}

export default MoviePage;
