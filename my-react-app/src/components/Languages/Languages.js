import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

import styled from "styled-components";
import Slider from "react-slick";

const ImgDiv = styled.div`
  background-color: transparent;
  width: 140px;
  height: 120px; 
  margin: 0 auto; 

  
  
`;

const Image = styled.img`
 width: 100%; 
   height: 100%; 
  object-fit: cover;
  display: block;
  position: relative;
  padding: 6px;
  border-radius: 6px;

  &:hover {
    opacity: 1;
    scale: 1.2;
    padding: 1;
  }
`;
const Carousel = styled(Slider)`
  overflow: hidden;

  /* width: auto;
  height: auto; */
  /* margin: 50px; */
  margin-left: 20px;

  //   margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-prev {
    left: -23px;
  }

  .slick-next {
    right: -23px;
  }
`;


const Languages=()=>{
    let settings = {
        dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
      };

    return(

        <Carousel {...settings}>
      <ImgDiv>
        <Image src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e" alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6660/1526660-a-afdd1ecfd8ae" alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6682/1526682-a-fd4e220ba563" alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6685/1526685-a-5f5995a53f61" alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6672/1526672-a-eafe6913c6c8" alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6659/1526659-a-7271cf19114e" alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e" alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8124/1714043448124-a" alt="" />
      </ImgDiv>
      <ImgDiv>
        <Image src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6674/1526674-a-fdd5233a7699" alt="" />
      </ImgDiv>
    </Carousel>
    );
}

export default Languages;