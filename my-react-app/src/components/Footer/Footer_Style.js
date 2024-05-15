import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #040714;
  color: #fff;
  text-align: center;
  position: relative;
  padding-left: 10vw;
  padding-top: 25vh;
  padding-bottom: 4.7vh;
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6vh;
  h1 {
    font-weight: bold;
    padding-bottom: 2.4vh;
    font-size: 1.3vw;
  }
  p {
    color: gray;
    font-size: 1.3vw;
  }
`;

export const ContentArea = styled.div`
  display: flex;
  gap: 15.5vw;
  
`;

export const Credits = styled.div`
  color: gray;
  padding-top: 4.7vh;
  float: left;
  display: flex;
  gap: 15.5vw;
  justify-content: space-between;
  align-items: center;

  img {
    width: 10vw;
    height: 6.3vh;
    margin-left: 2.3vw;
    display: inline-block;
  }

  p {
    display: block;
    font-size: 1.3vw;
  }
`;
