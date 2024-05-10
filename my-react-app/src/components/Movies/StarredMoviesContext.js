// StarredMoviesContext.js

import { createContext, useState } from "react";

export const StarredMoviesContext = createContext();

export const StarredMoviesProvider = ({ children }) => {
  const [starredMovies, setStarredMovies] = useState([]);
  

  return (
    <StarredMoviesContext.Provider value={{ starredMovies, setStarredMovies }}>
      {children}
    </StarredMoviesContext.Provider>
  );
};
