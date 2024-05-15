import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.movieUrl});
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.8;
  position: relative;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  overflow-x: hidden;
  position: relative;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  /* overflow: hidden; */
`;

export const DarkOverlay = styled.div`
  background: linear-gradient(
      to right,
      rgba(4, 7, 20, 0.9) 20%,
      transparent 100%
    ),
    linear-gradient(to top, rgba(4, 7, 20, 0.9) 20%, transparent 100%);

  position: absolute;
  width: 100%;
  height: 100%;
`;
export const Heading = styled.div`
  /* /* margin-top: 100px; */
  /* margin-left: 150px;  */
  display: flex;
  gap: 3.9vw;
  h1 {
    font-size: large;
    font-weight: bold;
  }
`;
export const Content = styled.div`
  margin-top: 15.7vh;
  margin-left: 11.6vw;
  display: flex;
  flex-direction: column;
  gap: 7.9vh;
`;
