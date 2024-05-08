import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Carousel, ImgDiv, Image } from "./TitleCards_Style";

const Genres = ({ urls }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <Carousel {...settings}>
      {urls.map((url, index) => (
        <ImgDiv>
          <Image key={index} src={url} />
        </ImgDiv>
      ))}
    </Carousel>
  );
};

export default Genres;
