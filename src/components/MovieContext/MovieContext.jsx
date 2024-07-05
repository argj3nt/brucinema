import React, { createContext, useState } from 'react';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movieInfo, setMovieInfo] = useState(null);

  return (
    <MovieContext.Provider value={{ movieInfo, setMovieInfo }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
