// StarredMoviesContext.js

import { createContext, useState } from "react";

export const StarredMoviesContext = createContext();

export const StarredMoviesProvider = ({ children }) => {
  const [starredMovies, setStarredMovies] = useState([]);
  const [heads, setHeads] = useState([]);
  

  return (
    <StarredMoviesContext.Provider value={{ starredMovies, setStarredMovies ,heads,setHeads}}>
      {children}
    </StarredMoviesContext.Provider>
  );
};
