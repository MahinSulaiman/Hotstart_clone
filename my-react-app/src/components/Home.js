import React from "react";

import styled from "styled-components";
import video from "../images/video.mp4";
import SideBar from "./sidebar";
import Title from "./Title";
import MovieList from "./movies";
// import Suggestion from "./Suggestion";



const HomeDiv=styled.div`
    positon:relative;
    overflow: hidden;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 20%, transparent 100%);
    
    
`;



const Background=styled.video`
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    z-index: -1;
    

`;

const ListDiv=styled.div`
   display:flex;
   flex-direction: column;
   gap:15px;
   padding-top:520px;
   padding-left:100px;
  //  z-index:1;

`;

const Heading=styled.h1`
  font-weight:bold;
  padding-left:30px;
  color:white;
 
 z-index:3;
  
 
 `;




const Home=()=>{
    return (
        <HomeDiv>
            
           
            {/* <Shade/> */}
            <Background autoPlay muted loop  src={video}> 
            
                
            </Background >

           
           
            
            
            <SideBar/>
            <Title/>

            <ListDiv>

             <Heading>Family Movies</Heading>
            
             <MovieList movieDataURL="https://api.sampleapis.com/movies/family" />

             <Heading>Comedy Movies</Heading>
             <MovieList movieDataURL="https://api.sampleapis.com/movies/comedy" />
            </ListDiv>


            

              

         </HomeDiv>



    );
}

export default Home;