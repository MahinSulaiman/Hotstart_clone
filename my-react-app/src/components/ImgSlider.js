import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import styled from "styled-components";
import image from "../images/image.jpeg"




const ImgDiv=styled.div`



background-color: transparent;

   
 


   
   
`;

const Image=styled.img`
opacity:0.7;
cursor: pointer;
height:50px;
width:100px;
display: block;
position: relative;
padding: 4px;
border-radius: 6px;


  &:hover {
    opacity:1;
    scale:1.2;
    padding: 1;
    
`;

const Carousel = styled(Slider)`
overflow:hidden;

// position:relative;
// margin-left:50px;
// margin-top:50px;
//    height:30px;

width:300px;

//   margin-top: 20px;

  & > button {
    opacity: 1;
    height: 100%;
    width: 5vw;
    z-index: 1;

    // &:hover {
    //   opacity: 1;
    //   transition: opacity 0.2s ease 0s;
    // }
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

//   .slick-list {
//     overflow: initial;
//   }

  .slick-prev {
    left: -23px;
  }

  .slick-next {
    right: -23px;
  }
`;


 
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

// {/* <div >
// <img src="https://m.media-amazon.com/images/M/MV5BNTI1NjNkNmItM2FlZi00MWU1LWJkMmMtMzBjMDI4YmU5YjIyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg" className="h-20 w-28 " />
// </div> */}