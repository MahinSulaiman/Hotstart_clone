import styled from "styled-components";
import Slider from "react-slick";

export const ImgDiv = styled.div`
  background-color: transparent;
  width: 10.8vw;
  height: 22vh;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  display: block;
  position: relative;
  padding: 0.5vw;
  border-radius: 12px;

  &:hover {
    opacity: 1;
    scale: 1.2;
    padding: 1;
  }
`;
export const Carousel = styled(Slider)`
  overflow: hidden;

  margin-left: 1.5vw;

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
    left: -1.7vw;
  }

  .slick-next {
    right: -1.7vw;
  }
`;
