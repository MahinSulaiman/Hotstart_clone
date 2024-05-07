import React from "react";
import styled from "styled-components";
import disney from "../../images/disney.webp";
import pixar from "../../images/pixar.webp";
import marvel from "../../images/marvel.webp";
import startwar from "../../images/starwar.webp";
import national from "../../images/national.webp";
import hotstar from "../../images/hotstar.webp";

const Container=styled.div`
   position: relative;
   display: flex;
   gap: 8px;
   margin-left: 25px;

`;
const Cards=styled.div`
   /* margin: 50px; */

  align-items: center;
  /* background-color:red; */
  width: 175px;
  height: 100px;
  

  video{
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: none;
  }

  &:hover {
    scale: 1.1;
    transition: transform 0.5s ease-in-out;
    video{
        display: block;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }
    img{
        display: none;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }


  
 
`;




const Brands=()=>{

    return(

        <Container>
            <Cards>
                <video src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qh3yh_1587393133132" autoPlay muted loop />
                <img src={disney} alt="" />
            </Cards>

            <Cards>
                <video src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/a6lr0r_1587393331483" autoPlay muted loop />
                <img src={pixar} alt="" />
            </Cards>

            <Cards>
                <video src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/1on5cf_1587393232549" autoPlay muted loop />
                <img src={marvel} alt="" />
            </Cards>

            <Cards>
                <video src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/utwmfd_1587393376512" autoPlay muted loop />
                <img src={startwar} alt="" />
            </Cards>

            <Cards>
                <video src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/ojerhm_1587393280208" autoPlay muted loop />
                <img src={national} alt="" />
            </Cards>

            <Cards>
                <video src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qc9clm_1669284974594" autoPlay muted loop />
                <img src={hotstar} alt="" />
            </Cards>

           

        </Container>
    );

}

export default Brands;