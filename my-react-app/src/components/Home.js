import React from "react";

import styled from "styled-components";
import video from "../images/video.mp4";
import SideBar from "./sidebar";
import Title from "./Title";
import MovieList from "./movies";
// import Suggestion from "./Suggestion";

const Shade = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50%; /* Adjust the width of the shade as needed */
  height: 100%;

background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 20%, transparent 100%);
  z-index: 0; 
`;

const HomeDiv=styled.div`
    positon:relative;
    
    
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




const Home=()=>{
    return (
        <HomeDiv>
            
           
            <Shade/>
            <Background autoPlay muted loop  src={video}> 
            
                
            </Background>

           
           
            
            
            <SideBar/>
            <Title/>
            
            <MovieList/>


            

              

         </HomeDiv>



    );
}

export default Home;