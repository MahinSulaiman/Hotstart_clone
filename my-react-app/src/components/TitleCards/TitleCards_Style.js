import styled from "styled-components";
import Slider from "react-slick";

export const ImgDiv = styled.div`
  background-color: transparent;
  width: 140px;
  height: 140px;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: relative;
  padding: 6px;
  border-radius: 12px;

  &:hover {
    opacity: 1;
    scale: 1.2;
    padding: 1;
  }
`;
export const Carousel = styled(Slider)`
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
