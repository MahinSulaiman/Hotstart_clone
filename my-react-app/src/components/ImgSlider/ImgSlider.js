import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

import image from "../../images/image.jpeg";
import {ImgDiv,Image,Carousel} from "./ImgSlider_Style";
import premalu from "../../images/premalu.mp4";
import hridayam from "../../images/hridayam.mp4";



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

  // const handleButtonClick = () => {
    
  //   onVideoChange(video,"https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/6589/1366589-t-d3c00f1f2831");
  // };
  return (
    <Carousel {...settings}>
      <ImgDiv onClick={() => {
    
    onVideoChange(hridayam,"https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/6589/1366589-t-d3c00f1f2831");
  }}>
        <Image src={image} alt="" />
      </ImgDiv>
      <ImgDiv onClick={() => {
    
    onVideoChange(premalu,"https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/8256/1712839838256-t")}}>
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


