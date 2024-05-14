import React,{useContext} from "react";
import Title from "../Title/Title";
import MovieList from "../Movies/Movies";
import Footer from "../Footer/Footer";
import {
  Container,
  Background,
  DarkOverlay,
  Content,
  Heading,
} from "./MovieDetails_Style";
import { SelectedMovieContext } from "./SelectedMoviesContext";

const MovieDetails = () => {
  const { selectedMovie } = useContext(SelectedMovieContext);
  
  return (
    <Container>
      <Background movieUrl={selectedMovie}>
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
