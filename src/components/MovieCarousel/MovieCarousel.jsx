import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MovieCarousel = () => {
    const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
          try {
            const response = await axios.get(
              'https://api.themoviedb.org/3/movie/9987/recommendations',
              {
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWY5NGU5YjIxNTA3Mjk0NTU0Y2Q5YTExMThiZTAyZiIsIm5iZiI6MTcxOTgyMzAzOC40OTI5OTksInN1YiI6IjY2MjIyZDdmMzJjYzJiMDE2MzBkNWQ1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l5a4TNiqhQQX_65LDEvGD6kBZ1_JP5K08-clxHn09sY'
                }
              }
            );
            setMovies(response.data.results);
            setFeaturedMovie(response.data.results[0]);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching movies:', error);
            setError('Error fetching movies. Please try again later.');
            setLoading(false);
          }
        };
    
        fetchMovies();
      }, []);

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
        const walk = (x - startX) * 4;
        carouselRef.current.scrollLeft = scrollLeft - walk;
      };
    
      const handleTouchStart = (e) => {
        setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
      };
    
      const handleTouchMove = (e) => {
        const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 4;
        carouselRef.current.scrollLeft = scrollLeft - walk;
      };


  return (
    <>
    <div>
        
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
            {movies.map((movie, index) => (
              <div className="movieposter-wrapper" key={index}>
                <div className="movieposter-image-wrapper">
                  <div className="movieposter-overlay">
                    <p className="movie-description">
                      <Link to={`/movie/${movie.id}`}>
                        <button className="btn2">SÉANCES</button>
                      </Link>
                    </p>
                  </div>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='movieposter' alt={`Poster for ${movie.name}`} />
                </div>
                <p className='moviet'>{movie.name}</p>
              </div>
            ))}
          </div>
          <button className='scroll-btn right' onClick={scrollRightBtn}><FaAngleRight className='faricon' /></button>
        </div>

    </div>
    </>
  )
}

export default MovieCarousel
