import React from "react";
import styled from "styled-components";

const TitleDiv=styled.div`
position: absolute;
// top: 20px; 

margin-left:130px;
margin-top:130px;
opacity:0.7



z-index: 1;
`;

const Image = styled.img`
  width: 240px;
  height: 100px;
  padding-bottom:30px;
//   opacity: 0.6; /* Set opacity to make the image transparent */
`;


const Txt=styled.p`

font-family: Arial, sans-serif; /* Choose a nice font */
font-size: 17px; /* Adjust font size */
line-height: 1.5; /* Adjust line spacing */

margin-bottom: 20px; /* Add some spacing between paragraphs */
text-align: justify;
color:white;


`;

const SButton =styled.button`
 width:350px;
 height:60px;
 border: none;
 border-radius: 12px;
 background-color: rgba(128, 128, 128, 0.3);
 margin-top:10px;
 transition: background-color 0.5s ease, transform 0.5s ease; 

 &:hover {
    background-color: rgba(128, 128, 128, 0.6); /* Darker gray color with 80% transparency */
    transform: scale(1.03) ; /* Scale the button on hover */
 }
 

`;

const BtnTxt=styled.span`


  font-size:20px;
  font-weight: bold;
  color:white;
`;

const PButton=styled.button`

width:80px;
height:60px;
border: none;
border-radius: 12px;
background-color: rgba(128, 128, 128, 0.3);
margin-left:15px;
&:hover {
    background-color: rgba(128, 128, 128, 0.6);


`;



const Title=()=>{
    return(
        <TitleDiv>
        <Image src="https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/6589/1366589-t-d3c00f1f2831" alt="hridayam"/>
        <h4 style={{color:"yellow",paddingBottom:"15px"}}>Blockbuster</h4>
        <h3>2022 . 2h 51m . Malayalam . <span>U/A 13+</span></h3>
        <Txt>From carefree college days to becoming a successful wedding<br/> 
            photographer, this coming-of-age story depicts the colours of<br/>
            Arun Neelakandan's exciting life.</Txt>

         <h4>Romance | Drama | RomCom | Couples</h4>

         <SButton><BtnTxt>Subscribe to Watch</BtnTxt></SButton>
         <PButton><BtnTxt>+</BtnTxt></PButton>

            
     
</TitleDiv>
    )
}

export default Title;