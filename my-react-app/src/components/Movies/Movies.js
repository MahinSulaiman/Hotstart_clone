import { React, useState, useEffect } from "react";
import DisplayMovie from "./DisplayMovie";

const MovieList = ({ movieDataURL }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [titles,setTitles]=useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(movieDataURL);
        const movies = await resp.json();

        // Extract image URLs from movie data
        const urls = movies.map((movie) => movie.posterURL);
      

        setImageUrls(urls);

        const titles=movies.map((movie)=>movie.title)
        setTitles(titles)


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [movieDataURL]);

  return (
    <div>
      <DisplayMovie imageUrls={imageUrls} titles={titles}/>
    </div>
  );
};

export default MovieList;
