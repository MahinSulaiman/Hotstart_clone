import {React,useEffect,useState} from "react";

import styled from "styled-components";
import video from "../images/video.mp4";
import SideBar from "./Sidebar";
import Title from "./Title";
import MovieList from "./Movies";
import ImgSlider from "./ImgSlider";




const HomeDiv=styled.div`
    positon:relative;
    overflow: hidden;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 20%, transparent 100%);
    background-color: ${props => props.bgColor};
    
    
`;



const Background=styled.video`
    position:fixed;
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

 const Slider=styled.div`

 position: absolute;
 top: 440px; /* Adjust this value to move the slider to the desired distance from the top */
 left: 80%; /* Place it horizontally at the center */
 transform: translateX(-50%); /* Center the slider horizontally */
 z-index: 2; /* Put the slider above the video */

   
 
     
 `;




const Home=()=>{

    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos < currentScrollPos) {
        // Scrolling down
        document.getElementById("background-video").pause();
        setBgColor("#040714");
      }
      
      
      else {
        // Scrolling up
        document.getElementById("background-video").play();
        setBgColor("transparent");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

    return (
        <HomeDiv bgColor={bgColor}>
            
           
            
            <Background id="background-video" autoPlay muted loop  src={video}> 
            
                
            </Background >

           
           
            
            
            <SideBar/>
            <Title/>
           

            <ListDiv>

             <Heading>Family Movies</Heading>
            
             <MovieList movieDataURL="https://api.sampleapis.com/movies/family" />

             <Heading>Comedy Movies</Heading>
             <MovieList movieDataURL="https://api.sampleapis.com/movies/comedy" />
            </ListDiv>
            <Slider>
            <ImgSlider/>

            </Slider>


      


            

              

         </HomeDiv>



    );
}

export default Home;


// #ma