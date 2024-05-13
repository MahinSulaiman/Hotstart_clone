import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

import image from "../../images/image.jpeg";
import {ImgDiv,Image,Carousel} from "./ImgSlider_Style";
import premalu from "../../images/premalu.mp4"



function ImgSlider({onVideoChange}) {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    // autoplay: true,
  };

  const handleButtonClick = () => {
    // Call the onVideoChange callback with the new video URL
    onVideoChange(premalu);
  };
  return (
    <Carousel {...settings}>
      <ImgDiv>
        <Image src={image} alt="" />
      </ImgDiv>
      <ImgDiv onClick={handleButtonClick}>
        <Image src="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1032/1712839861032-i" alt="" />
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


