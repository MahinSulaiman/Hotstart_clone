import styled from "styled-components";

export const Sub = styled.button`
  border: none;
  border-radius: 35px;
  color: orange;
  background-color: rgba(255, 165, 0, 0.2);
  margin-top:0.8vh;
  font-size: 1vw;
  width: 7vw;
  height: 3vh;
  margin-left: 1vw;
  // opacity: 0.3;
`;

export const SidebarContainer = styled.div`
  width: 9vw;
  height: 100vh;
  background-color: #333;
  // padding: 20px;
  align-items: center;
  background-color: rgba(51, 51, 51, 0);
  // background-color:black;
  z-index: 3;
  position: fixed;
  // background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 5%, transparent 100%);
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8vh;

  gap: 4.5vh;
`;

export const LogoContainer = styled.div`
  padding-top: 5vh;
  padding-left: 2.5vw;
  img{
    width: 4vw;
    height: 6vh;
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(10px, -50%);
  padding: 7px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 5px;
  // visibility: hidden;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  width: fit-content;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0);
`;

export const IconWrapper = styled.div`
  position: relative;
  img{
    width: 1.8vw;
    height: 4vh;
  }
  #count{
    background-color: red;
    color:white;
    border-radius:1em;
    padding: 0.3em 0.6em;
    font-size: 0.8em;    
    font-weight: bold ;
  }

  &:hover {
    scale: 1.1;
    ${Tooltip} {
      font-weight: bold;
      font-size: 120%;
    }
  }
`;
