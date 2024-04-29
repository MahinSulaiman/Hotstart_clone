import React from 'react'

import { useEffect, useState } from 'react';
import styled from "styled-components";



const CardDiv=styled.div`

    
    
    margin-left:120px;
    transition: transform 0.5s ease-in-out;
    display:flex;
    gap:10px;
    position:absolute;
    margin-top:100px;
    top:400px;
    

   
    

`;

const ImageContainer = styled.div`
background-color:red;

width :150px;
height:200px;
 
  &:hover {
    transform: scale(1.8);
    // width:300px;
    // height:150px;
    img{
      height:100px;
  }

    
 
  }
`;


 
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


<CardDiv>
{imageUrls.map((url, index) => (
  <ImageContainer key={index}>
        <img key={index} src={url} alt={`Movie Poster ${index}`} height="200px" width="150px" />

        </ImageContainer>
      ))}
    
</CardDiv>
)
}
 
export default MovieList;
 