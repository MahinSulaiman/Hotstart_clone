import { React, useState, useEffect } from "react";
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
} from "./Movie_Style";

const MovieList = ({ movieDataURL }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [visibleImages, setVisibleImages] = useState(7);

  const getData = async () => {
    try {
      const resp = await fetch(movieDataURL);
      const movies = await resp.json();

      // Extract image URLs from movie data
      const urls = movies.map((movie) => movie.posterURL);

      setImageUrls(urls);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [getData]);

  const handleLeftScroll = () => {
    setScrollPosition((prevPosition) => Math.max(0, prevPosition - 6));
  };

  const handleRightScroll = () => {
    setScrollPosition((prevPosition) =>
      Math.min(prevPosition + 6, imageUrls.length - 6)
    );
  };

  return (
    <>
      <ContainerDiv>
        {imageUrls
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
                height="200px"
                width="150px"
              />

              {hoveredIndex === index + scrollPosition && (
                <Overlay>
                  <div style={{ display: "flex" }}>
                  <Link to={`/detailed?url=${url}`}><Button>
                      <h3 style={{ fontWeight: "bold", fontSize: 8 }}>
                        Watch Now
                      </h3>
                    </Button></Link>
                    <SmallButton>+</SmallButton>
                  </div>

                  <SmallText>2024-2h.12m-Hindi-U/A16+</SmallText>

                  <Text>
                    From carefree college days to becoming a successful wedding
                    photographer, this coming-of-age story depicts the colours
                    of Arun Neelakandan's exciting life.
                  </Text>
                </Overlay>
              )}
            </CardDiv>
          ))}

        <LeftButton onClick={handleLeftScroll}>{"<"}</LeftButton>
        <RightButton onClick={handleRightScroll}>{">"}</RightButton>
      </ContainerDiv>
    </>
  );
};

export default MovieList;
