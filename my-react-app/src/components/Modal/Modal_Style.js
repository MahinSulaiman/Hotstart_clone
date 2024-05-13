import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
 position: relative; 
  background-color: white;
  min-width: 23vw; /* Minimum width */
  min-height: 31vh;
  /* padding: 20px; */
  /* border-radius: 8px; */
  
  /* color: black; */
 
  h6{
    color: red;
    margin:20px;
  }
`;

export const Header=styled.div`
/* border-top-right-radius:8px;
border-top-left-radius: 8px; */


 position: relative;
 height:60px;
 background-color: #040714;
 display: flex;
  justify-content: center; 
  align-items: center; 
 h1{
    font-weight:bold ;
    font-size: x-large;
  }

`;

export const Content=styled.div`
  margin: 10px;
  display: flex;
  justify-content: center; 
  align-items: center;
  
`;

export const CloseButton = styled.button`
   position: absolute;
  /* top: 3px;
  right: 10px; */

  top: 0;
  right:0;
  border: none;
  /* border-radius: 50%; */
  background: none;
  font-size: 20px;
  cursor: pointer;
  color: white;
  /* padding: 5px; */
  /* background-color: black; */
  width: 30px; /* Set width */
  height: 30px;
`;
