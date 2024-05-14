import React, { createContext, useState } from "react";

export const SelectedMovieContext = createContext();

export const SelectedMovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <SelectedMovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
      {children}
    </SelectedMovieContext.Provider>
  );
};
