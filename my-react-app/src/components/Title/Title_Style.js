import styled from "styled-components";

export const TitleDiv = styled.div`
  position: absolute;
  // top: 20px;

  margin-left: 10vw;
  margin-top: 20vh;
  opacity: 0.7;
  z-index: 1;
  h3{
    font-weight: bold;
    font-size: 1.2vw;
    color: white;
  }

  h4{
    font-weight: bold;
    color:yellow;
    padding-bottom: 2.4vh;
    font-size: 1.2vw;
  }
`;

export const Image = styled.img`
  width: 18.5vw;
  height: 15.7vh;
  padding-bottom: 4.7vh;
`;

export const Txt = styled.p`
  font-family: Arial, sans-serif; /* Choose a nice font */
  font-size: 1.3vw; /* Adjust font size */
  line-height: 1.5; /* Adjust line spacing */

  margin-bottom: 3.1vh; /* Add some spacing between paragraphs */
  text-align: justify;
  color: white;
`;

export const SButton = styled.button`
  width: 27vw;
  height: 9.4vh;
  border: none;
  border-radius: 12px;
  background-color: rgba(128, 128, 128, 0.3);
  margin-top: 1.6vh;
  transition:
    background-color 0.5s ease,
    transform 0.5s ease;

  &:hover {
    background-color: rgba(128, 128, 128, 0.6);
    transform: scale(1.03);
  }
`;

export const BtnTxt = styled.span`
  font-size: 1.5vw;
  font-weight: bold;
  color: white;
`;

export const PButton = styled.button`
  width: 6.2vw;
  height: 9.4vh;
  border: none;
  border-radius: 12px;
  background-color: rgba(128, 128, 128, 0.3);
  margin-left: 1.2vw;
  &:hover {
    background-color: rgba(128, 128, 128, 0.6);
  }
`;
