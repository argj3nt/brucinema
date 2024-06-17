import React from 'react'
import Poster from '../../assets/peaky.jpg';
import './MoviePage.css'
import { FaReply } from "react-icons/fa";


const MoviePage = () => {
  return (
    <>
    <div className='movcontain'>
    <div className='ico'><FaReply className='repicon' />ACCUEIL I FILMS</div>
        <div className='movdesc'>
        <img src={Poster} alt="poster" className='movpic' />
        </div>
    </div>
    </>
  )
}

export default MoviePage
