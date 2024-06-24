import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import MoviePage from './components/MoviePage/MoviePage';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';

const App = () => {
  return (
    <div>
      < Checkout />
      {/* <Header />
      <MoviePage />
      <Footer /> */}
    </div>
  )
}

export default App
