import styled from "styled-components";
import Slider from "react-slick";

export const ImgDiv = styled.div`
  background-color: transparent;
`;

export const Image = styled.img`
  opacity: 0.7;
  cursor: pointer;
  height: 50px;
  width: 100px;
  display: block;
  position: relative;
  padding: 4px;
  border-radius: 6px;

  &:hover {
    opacity: 1;
    scale: 1.2;
    padding: 1;
  }
`;

export const Carousel = styled(Slider)`
  overflow: hidden;

  width: 300px;

  //   margin-top: 20px;

  & > button {
    opacity: 1;
    height: 100%;
    width: 5vw;
    z-index: 1;
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
