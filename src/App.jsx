import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';

const App = () => {
  return (
    <div>

      <Header />
      <HomePage />
    </div>
  )
}

export default App
