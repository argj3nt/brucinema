import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import MoviePage from './components/MoviePage/MoviePage';

const App = () => {
  return (
    <div>

      <Header />
      <MoviePage />
    </div>
  )
}

export default App
