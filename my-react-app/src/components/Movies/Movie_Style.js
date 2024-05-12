import styled from "styled-components";
import { HiStar } from "react-icons/hi2";

export const ContainerDiv = styled.div`
  position: relative;
  display: flex;
  //   justify-content: space-between;
  //   padding: 0 20px;
  gap: 20px;
  margin-left: 30px;
  z-index: 2;
`;

export const CardDiv = styled.div`
  overflow: clip;

  width: 150px;
  height: 200px;
  background-color: black;
  // margin:150px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.8);
    img {
      height: 75px;
    }
  }
`;

export const Overlay = styled.div`
  margin-left: 7px;
  position: relative;
  top: 5px;
  bottom: 0px;

  height: auto;
  width: auto;
  // background-color: rgba(0, 0, 0, 0.5); /* semi-transparent background */
  // padding: 0px ;
`;

export const Button = styled.button`
  width: 100px;
  height: 25px;
  background-color: white;
  color: #333;
  border: none;
  // padding: 5px 8px;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
`;

export const Text = styled.p`
  color: #fff;
  margin: 0;
  padding: 5px 2px;
  font-size: 8px;
`;

export const SmallButton = styled.button`
  border-radius: 5px;
  height: 25px;
  width: 30px;
  background-color: grey;
  color: #333;
  border: none;
  margin-top: 3px;

  margin-left: 5px;
  cursor: pointer;
  text-decoration: none;
`;
export const SmallText = styled.p`
  padding-top: 5px;

  font-weight: bold;
  font-size: 8px;
  text-align: justify;
`;

export const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: gray; 
  border-radius: 20px; 
  cursor: pointer;
  font-size: 20px;
  color:white;
  font-weight: bold;
 
 
 
`;

export const LeftButton = styled(ScrollButton)`
  left: 0;
  
`;

export const RightButton = styled(ScrollButton)`
  right: 100px;
`;

export const Star=styled(HiStar)`
   fill: ${(props) => (props.filled ? "red" : "grey")};
  margin-left: 8px;
  cursor: pointer;

`