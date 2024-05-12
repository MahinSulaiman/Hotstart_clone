import React,{useState,useContext} from "react";
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
  Star
} from "./Movie_Style";
import { StarredMoviesContext } from "./StarredMoviesContext";

const DisplayMovie=({imageUrls})=>{

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [starredMovies, setStarredMovies] = useState([]);
  const { starredMovies, setStarredMovies } = useContext(StarredMoviesContext);


  const handleLeftScroll = () => {
    setScrollPosition((prevPosition) => Math.max(0, prevPosition - 6));
  };

  const handleRightScroll = () => {
    setScrollPosition((prevPosition) =>
      Math.min(prevPosition + 6, imageUrls.length - 6)
    );
  };

  const toggleStarred = (url) => {
    if (starredMovies.includes(url)) {
      setStarredMovies(starredMovies.filter((movieUrl) => movieUrl !== url));
    } else {
      setStarredMovies([...starredMovies, url]);
    }
  };

  const isLessThanSeven = imageUrls.length < 7;

  return (
    <>
      <ContainerDiv>
  {imageUrls.length === 0 ? (
    <h1>No items to show</h1>
  ) : (
    imageUrls.slice(scrollPosition, scrollPosition + 7).map((url, index) => (
      <CardDiv
        key={index + scrollPosition}
        onMouseEnter={() => setHoveredIndex(index + scrollPosition)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <img
          key={index}
          src={url}
          alt={`Movie Poster ${index}`}
          height="200px"
          width="150px"
        />

        {hoveredIndex === index + scrollPosition && (
          <Overlay>
            <div style={{ display: "flex" }}>
              <Link to={`/detailed?url=${url}`}>
                <Button>
                  <h3 style={{ fontWeight: "bold", fontSize: 8 }}>
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
                  onClick={() => toggleStarred(url)}
                />
              </button>
            </div>
            <Text>
              From carefree college days to becoming a successful wedding
              photographer, this coming-of-age story depicts the colours of
              Arun Neelakandan's exciting life.
            </Text>
          </Overlay>
        )}
      </CardDiv>
    ))
  )}

  {!isLessThanSeven && <LeftButton onClick={handleLeftScroll}>{"<"}</LeftButton>}
  {!isLessThanSeven && <RightButton onClick={handleRightScroll}>{">"}</RightButton>}
</ContainerDiv>

    </>
  );
};

export default DisplayMovie;



