import React from 'react';
import MovieImage from '../../assets/furiosa.jpg';
import './HomePage.css';
import Poster from '../../assets/peaky.jpg';

const HomePage = () => {
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

        <div className='movieposter-container'>
          <div className="movieposter-wrapper">
            <div className="movieposter-image-wrapper">
              <div className="movieposter-overlay">
                <p className="movie-description"><button className="btn2">SÉANCES</button></p>
              </div>
              <img src={Poster} alt="poster" className='movieposter' />
            </div>
            <p className='moviet'>Peaky Blinders</p>
          </div>

          <div className="movieposter-wrapper">
            <div className="movieposter-image-wrapper">
              <div className="movieposter-overlay">
                <p className="movie-description"><button className="btn2">SÉANCES</button></p>
              </div>
              <img src={Poster} alt="poster" className='movieposter' />
            </div>
            <p className='moviet'>Peaky Blinders</p>
          </div>

          <div className="movieposter-wrapper">
            <div className="movieposter-image-wrapper">
              <div className="movieposter-overlay">
                <p className="movie-description"><button className="btn2">SÉANCES</button></p>
              </div>
              <img src={Poster} alt="poster" className='movieposter' />
            </div>
            <p className='moviet'>Peaky Blinders</p>
          </div>

          <div className="movieposter-wrapper">
            <div className="movieposter-image-wrapper">
              <div className="movieposter-overlay">
                <p className="movie-description"><button className="btn2">SÉANCES</button></p>
              </div>
              <img src={Poster} alt="poster" className='movieposter' />
            </div>
            <p className='moviet'>Peaky Blinders</p>
          </div>
        </div>
      </div>
      <div className='newsletter'>
       <h1 className='newstitle'>INSCRIVEZ-VOUS DÈS MAINTENANT !</h1>
      <div className="input-container">
        <p className='infonewsletter'>Je souhaite recevoir l'actualité cinéma et les meilleures offres UGC.</p>
    <input type="email" placeholder="Entrez votre adresse e-mail" className="email-input" />

    <button className="subscribe-btn">JE M'ABONNE</button>
  </div>
</div>
    </>
  );
}

export default HomePage;
