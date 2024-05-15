import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Overlay,
  SmallButton,
  ContainerDiv,
  CardDiv,
  SmallText,
  Text,
  LeftButton,
  RightButton,
  Star,
} from "./Movie_Style";
import { StarredMoviesContext } from "./StarredMoviesContext";
import { SelectedMovieContext } from "../MovieDetails/SelectedMoviesContext";

const DisplayMovie = ({ imageUrls ,titles,onClose}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [starredMovies, setStarredMovies] = useState([]);
  const { starredMovies, setStarredMovies ,heads,setHeads} = useContext(StarredMoviesContext);
  const { setSelectedMovie } = useContext(SelectedMovieContext);

  const handleSelectMovie = (url) => {
    setSelectedMovie(url);
  };


  const handleLeftScroll = () => {
    setScrollPosition((prevPosition) => Math.max(0, prevPosition - 6));
  };

  const handleRightScroll = () => {
    setScrollPosition((prevPosition) =>
      Math.min(prevPosition + 6, imageUrls.length - 6)
    );
  };

  const toggleStarred = (url,head) => {
    if (starredMovies.includes(url)) {
      setStarredMovies(starredMovies.filter((movieUrl) => movieUrl !== url));
      setHeads(heads.filter((title) => title !== head));
    } else {
      setStarredMovies([...starredMovies, url]);
      setHeads([...heads,head])
    }
  };

  const handleCloseModal = () => {
    
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const isLessThanSeven = imageUrls.length < 7;

  return (
    <>
      <ContainerDiv>
        {imageUrls.length === 0 ? (
          <h6>No items to show</h6>
        ) : (
          imageUrls
            .slice(scrollPosition, scrollPosition + 7)
            .map((url, index) => (
              <CardDiv
                key={index + scrollPosition}
                onMouseEnter={() => setHoveredIndex(index + scrollPosition)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  key={index}
                  src={url}
                  alt={`Movie Poster ${index}`}
                  
                />

                {hoveredIndex === index + scrollPosition && (
                  <Overlay>
                    <div style={{ display: "flex" }}>
                      <Link to={`/detailed/${titles[index]}`}>
                      <Button onClick={() => { handleCloseModal(); handleSelectMovie(url); }}>
                          <h3 >
                            Watch Now
                          </h3>
                        </Button>
                      </Link>
                      <SmallButton>+</SmallButton>
                    </div>
                    <div style={{ display: "flex" }}>
                      <SmallText>2024-2h.12m-Hindi-U/A16+</SmallText>
                      <button>
                        <Star
                          filled={starredMovies.includes(url)}
                          onClick={() => toggleStarred(url,titles[index])}
                        />
                      </button>
                    </div>
                    <Text>
                      From carefree college days to becoming a successful
                      wedding photographer, this coming-of-age story depicts the
                      colours of Arun Neelakandan's exciting life.
                    </Text>
                  </Overlay>
                )}
              </CardDiv>
            ))
        )}

        {!isLessThanSeven && (
          <LeftButton onClick={handleLeftScroll}>{"<"}</LeftButton>
        )}
        {!isLessThanSeven && (
          <RightButton onClick={handleRightScroll}>{">"}</RightButton>
        )}
      </ContainerDiv>
    </>
  );
};

export default DisplayMovie;
