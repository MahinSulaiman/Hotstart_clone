import styled from "styled-components";

export const TitleDiv = styled.div`
  position: absolute;
  // top: 20px;

  margin-left: 130px;
  margin-top: 130px;
  opacity: 0.7;
  z-index: 1;
`;

export const Image = styled.img`
  width: 240px;
  height: 100px;
  padding-bottom: 30px;
`;

export const Txt = styled.p`
  font-family: Arial, sans-serif; /* Choose a nice font */
  font-size: 17px; /* Adjust font size */
  line-height: 1.5; /* Adjust line spacing */

  margin-bottom: 20px; /* Add some spacing between paragraphs */
  text-align: justify;
  color: white;
`;

export const SButton = styled.button`
  width: 350px;
  height: 60px;
  border: none;
  border-radius: 12px;
  background-color: rgba(128, 128, 128, 0.3);
  margin-top: 10px;
  transition:
    background-color 0.5s ease,
    transform 0.5s ease;

  &:hover {
    background-color: rgba(128, 128, 128, 0.6);
    transform: scale(1.03);
  }
`;

export const BtnTxt = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const PButton = styled.button`
  width: 80px;
  height: 60px;
  border: none;
  border-radius: 12px;
  background-color: rgba(128, 128, 128, 0.3);
  margin-left: 15px;
  &:hover {
    background-color: rgba(128, 128, 128, 0.6);
  }
`;
