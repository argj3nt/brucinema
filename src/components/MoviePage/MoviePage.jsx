import React, { useRef, useState, useEffect } from 'react';
import './MoviePage.css';
import { FaReply, FaPlus, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Cinema from '../Cinema/Cinema';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import MovieCarousel from '../MovieCarousel/MovieCarousel';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const fetchMovieInfo = async () => {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieId}`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWY5NGU5YjIxNTA3Mjk0NTU0Y2Q5YTExMThiZTAyZiIsIm5iZiI6MTcxOTgyMzAzOC40OTI5OTksInN1YiI6IjY2MjIyZDdmMzJjYzJiMDE2MzBkNWQ1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l5a4TNiqhQQX_65LDEvGD6kBZ1_JP5K08-clxHn09sY'
        }
      };

      try {
        const response = await axios.request(options);
        setMovieInfo(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieInfo();
  }, [movieId]);

  if (!movieInfo) {
    return <p>Loading...</p>;
  }

  if (!movieInfo.title) {
    return <p>Error loading movie information</p>;
  }

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
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const { original_title, poster_path, release_date, status, overview, genres, production_companies } = movieInfo;

  const scrollToComponent = () => {
    const component = document.getElementById('composcroll');

    if (component) {
      window.scrollTo({
        top: component.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className='movcontain'>
        <div className='ico'>
          <Link to="/"><FaReply className='repicon' /> ACCUEIL</Link> | FILMS
        </div>
        <div className='movdesc'>
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className='movieposterpicture' alt={`Poster for ${original_title}`} />
          <div className='movinfos'>
            <h1 className='movtitle'>{original_title}</h1>
            <div className='movieallinfos'>
              <h3 className='movinf'><span className='datesortie'>Sortie le</span> {release_date}</h3>
              <h3 className='movinf'><span className='synopsis'>Synopsis</span> {overview}</h3>
              <h3 className='movinf'><span className='synopsis'>Genres:</span> {genres.map(genre => genre.name).join(', ')}</h3>
              <h3 className='movinf'><span className='synopsis'>De:</span> {production_companies.map(production_companies => production_companies.name).join(', ' )}</h3>
              <div className='bottomcat'>
                <button onClick={scrollToComponent} className="wtw-btn">OÙ REGARDER ?</button>
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

      <div id='composcroll'> 
      <Cinema />
      </div>

      <div className='recomand'>
        <h1 className='rc'>NOS RECOMMANDATIONS</h1>
      </div>

      <MovieCarousel/>
      

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
