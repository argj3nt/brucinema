import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import MoviePage from './components/MoviePage/MoviePage';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import BeforeTicket from './components/BeforeTicket/BeforeTicket';
import Cinema from './components/Cinema/Cinema';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import Register from './components/Register/Register';
import Tarifs from './components/Tarifs/Tarifs';
import MovieCarousel from './components/MovieCarousel/MovieCarousel';

const App = () => {
  const location = useLocation();

  const shouldShowHeaderFooter = location.pathname !== '/checkout' && location.pathname !== '/before-ticket';

  return (
    <>
      {shouldShowHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:movieId" element={<MoviePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/before-ticket" element={<BeforeTicket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/moviecarousel" element={<MovieCarousel />} />
      </Routes>
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
