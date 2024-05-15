import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.movieUrl});
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.8;
  position: relative;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  overflow-x: hidden;
  position: relative;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  /* overflow: hidden; */
`;

export const DarkOverlay = styled.div`
  background: linear-gradient(
      to right,
      rgba(4, 7, 20, 0.9) 20%,
      transparent 100%
    ),
    linear-gradient(to top, rgba(4, 7, 20, 0.9) 20%, transparent 100%);

  position: absolute;
  width: 100%;
  height: 100%;
`;
export const Heading = styled.div`
  /* /* margin-top: 100px; */
  /* margin-left: 150px;  */
  display: flex;
  gap: 3.9vw;
  h1 {
    font-size: large;
    font-weight: bold;
  }
`;
export const Content = styled.div`
  margin-top: 15.7vh;
  margin-left: 11.6vw;
  display: flex;
  flex-direction: column;
  gap: 7.9vh;
`;

export const Title=styled.div`
  /* margin-left: 50px; */
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 3vh;
  margin-left: 10vw;
  margin-top: 20vh;
  h1{
    font-weight: bold;
    font-size: 3.9vw;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
  h3{
    font-weight: bold;
    font-size: 1.2vw;
    color: white;
  }

  h4{
    font-weight: bold;
    font-size: 1.2vw;
    color: lightblue;
  }

  
`
export const Btns=styled.div`
  
   display:flex;
   gap:0.8vw;
   #button1{
    background-color: white;
    color:black;
    width: 27vw;
  height: 9.4vh;
    border: none;
  border-radius: 12px;
  font-weight: bold;
  &:hover {
    
    transform: scale(1.03);
  }
    
    
   }

   #button2{
    width: 6.2vw;
    height: 9.4vh;
    background-color: rgba(128, 128, 128, 0.3);
    color:black;
    border: none;
    border-radius: 12px;
    font-weight: bold;
    &:hover {
    background-color: rgba(128, 128, 128, 0.6);
  }

   }
  `;

;