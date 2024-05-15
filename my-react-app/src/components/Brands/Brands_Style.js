import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  gap: 0.6vw;
  margin-left: 1.9vw;
`;
export const Cards = styled.div`
  align-items: center;
  width: 13.5vw;
  height: 15.7vh;

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: none;
  }

  &:hover {
    scale: 1.1;
    transition: transform 0.5s ease-in-out;
    video {
      display: block;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
    img {
      display: none;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
`;
