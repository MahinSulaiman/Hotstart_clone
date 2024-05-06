import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

import image from "../../images/image.jpeg";
import {ImgDiv,Image,Carousel} from "./ImgSlider_Style";



function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    // initialSlide: 3,
    // autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <ImgDiv>
        <Image src={image} alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src={image} alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src={image} alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src={image} alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src={image} alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src={image} alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src={image} alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src={image} alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src={image} alt="" />
      </ImgDiv>
    </Carousel>
  );
}

export default ImgSlider;


