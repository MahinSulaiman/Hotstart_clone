import React,{useContext} from "react";
import MovieList from "../Movies/Movies";
import Footer from "../Footer/Footer";
import { useParams } from 'react-router-dom';
import {
  Container,
  Background,
  DarkOverlay,
  Content,
  Heading,
  Title,
  Btns,
} from "./MovieDetails_Style";
import { SelectedMovieContext } from "./SelectedMoviesContext";

const MovieDetails = () => {
  const { selectedMovie } = useContext(SelectedMovieContext);
  const { title } = useParams();
  
  return (
    <Container>
      <Background movieUrl={selectedMovie}>
        <DarkOverlay />

        {/* <SideBar /> */}
        {/* <Title /> */}

        <Title>
        
        <h1>{title}</h1>

        <h4 >Blockbuster</h4>
        <h3>
        2022 . 2h 51m . Malayalam . <span>U/A 13+</span>
      </h3>
        <p>

        From carefree college days to becoming a successful wedding
        <br />
        photographer, this coming-of-age story depicts the colours of
        <br />
        Arun Neelakandan's exciting life.
        </p>
        <h3>Romance | Drama | RomCom | Couples</h3>
        <Btns>
          <button id="button1">Subscribe to Watch</button>
          <button id="button2">+</button>

        </Btns>

        </Title>
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
