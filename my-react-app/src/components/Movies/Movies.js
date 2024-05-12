import { React, useState, useEffect} from "react";
import DisplayMovie from "./DisplayMovie";








const MovieList = ({ movieDataURL }) => {
  const [imageUrls, setImageUrls] = useState([]);
  // const [hoveredIndex, setHoveredIndex] = useState(null);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // // const [starredMovies, setStarredMovies] = useState([]);
  // const { starredMovies, setStarredMovies } = useContext(StarredMoviesContext);
  // const [visibleImages, setVisibleImages] = useState(7);

// console.log(starredMovies)
  useEffect(() => {

  const getData = async () => {
    try {
      const resp = await fetch(movieDataURL);
      const movies = await resp.json();

      // Extract image URLs from movie data
      const urls = movies.map((movie) => movie.posterURL);

      setImageUrls(urls);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    getData();
  }, [movieDataURL]);

  return(
    <div>
     <DisplayMovie imageUrls={imageUrls}/>
    </div>
  );
}


export default MovieList;
