import React from 'react'
// import newimg from '../images/Newrelease.png'
// function MovieList() {
// const getMovies=()=>{
//     try {
//         fetch("https://dummyapi.online/api/movies")
//         .then(res=>res.json())
//         .then(json=>console.log(json))
//     } catch (error) {
//         console.log(error);
//     }
//   getMovies()
 
// }
import { useEffect, useState } from 'react';
 
function MovieList() {
 
    const [imageUrls, setImageUrls] = useState([]);
  
    const getData = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/movies/family');
        const movies = await resp.json();
        
        // Extract image URLs from movie data
        const urls = movies.map(movie => movie.posterURL);
        
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
  return (
      <div className="flex overflow-x-auto  ">
        {/* <div className="flex flex-wrap   max-w-sm rounded overflow-hidden shadow-lg"> */}
              {/* <img className="w-full" src={newimg} alt=""/> */}
        <div className="flex space-x-4 z-34 pt-44">
            <h1 className="w-full text-center">M</h1>
            {/* Render image URLs */}
            {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Movie Poster ${index}`} className="w-48 h-64 mx-2 my-2" />
      ))}
    </div>
          </div>
    //   </div>
  )
}
 
export default MovieList;
 