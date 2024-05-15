import styled from "styled-components";

export const HomeDiv = styled.div`
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    to right,
    rgba(4, 7, 20, 0.95) 20%,
    transparent 100%
  );
  background-color: ${(props) => props.bgColor};
`;

export const Background = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  z-index: -1;
`;

export const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4vh;
  padding-top: 82vh;
  padding-left: 7.7vw;
  //  z-index:1;
`;

export const Heading = styled.h1`
  font-weight: bold;
  padding-left: 2.3vw;
  color: white;

  z-index: 3;
`;

export const Slider = styled.div`
  position: absolute;
  top: 68vh;
  left: 80%;
  transform: translateX(-50%);
  z-index: 2;
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;
