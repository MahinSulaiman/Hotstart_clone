import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import SideBar from "../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import MovieList from "../Movies/Movies";
import Footer from "../Footer/Footer";

const Background = styled.div`
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

const Container = styled.div`
overflow-x: hidden;
  position: relative;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  /* overflow: hidden; */
`;

const DarkOverlay = styled.div`
 background: linear-gradient(to right, rgba(4, 7, 20, 0.9) 20%, transparent 100%), linear-gradient(to top, rgba(4, 7, 20, 0.9) 20%, transparent 100%);


  position: absolute;
  width: 100%;
  height: 100%;
`;
const Heading=styled.div`
/* /* margin-top: 100px; */
/* margin-left: 150px;  */
  display:flex;
  gap: 50px;
  h1{
    font-size: large;
    font-weight: bold;
  }

`;
const Content=styled.div`
 margin-top: 100px;
margin-left: 150px;
display: flex;
flex-direction: column;
gap:50px;



`;

const MovieDetails = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const movieUrl = urlParams.get("url");

  return (
    <Container>
      <Background movieUrl={movieUrl}>
        <DarkOverlay />

        <SideBar />
        <Title />
      </Background>

      <Content>
        <Heading>
          <h1>More Like This</h1>
          <h1>Trailers & more</h1>
        </Heading>
        <hr></hr>
      
        <MovieList movieDataURL="https://api.sampleapis.com/movies/family" />
      </Content>
      <Footer/>
     
      
    </Container>
  );
};

export default MovieDetails;
