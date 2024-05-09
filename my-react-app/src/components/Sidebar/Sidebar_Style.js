import styled from "styled-components";

export const Sub = styled.button`
  border: none;
  border-radius: 35px;
  color: orange;
  background-color: rgba(255, 165, 0, 0.2);
  margin-top: 5px;
  font-size: small;
  width: 88px;
  height: 20px;
  margin-left: 10px;
  // opacity: 0.3;
`;

export const SidebarContainer = styled.div`
  width: 110px;
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
  margin-top: 70px;

  gap: 35px;
`;

export const LogoContainer = styled.div`
  padding-top: 30px;
  padding-left: 30px;
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

  &:hover {
    scale: 1.1;
    ${Tooltip} {
      font-weight: bold;
      font-size: 120%;
    }
  }
`;
