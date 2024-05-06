import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";
import SideBar from "../Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const Background = styled.div`
  background-image: url(${(props) => props.movieUrl});
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  position: relative;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const DarkOverlay = styled.div`
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.9) 20%,
    transparent 100%
  );
  position: absolute;
  width: 100%;
  height: 100%;
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
     
      
    </Container>
  );
};

export default MovieDetails;
