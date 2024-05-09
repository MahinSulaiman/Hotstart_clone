import React from "react";
import Title from "../Title/Title";
import { useLocation } from "react-router-dom";
import MovieList from "../Movies/Movies";
import Footer from "../Footer/Footer";
import {
  Container,
  Background,
  DarkOverlay,
  Content,
  Heading,
} from "./MovieDetails_Style";

const MovieDetails = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const movieUrl = urlParams.get("url");

  return (
    <Container>
      <Background movieUrl={movieUrl}>
        <DarkOverlay />

        {/* <SideBar /> */}
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
      <Footer />
    </Container>
  );
};

export default MovieDetails;
