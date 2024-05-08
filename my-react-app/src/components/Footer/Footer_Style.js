import styled from "styled-components";

export const FooterContainer = styled.footer`
  /* height:300px; */

  background-color: #040714;
  color: #fff;
  padding: 60px;
  text-align: center;
  /* margin-top: 20px; */
  position: relative; /* Ensure the footer is positioned relative to HomeDiv */
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 30%, 100%);
  padding-left: 130px;
  padding-top: 160px;
  padding-bottom: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  h1 {
    font-weight: bold;
    padding-bottom: 15px;
  }
  p {
    color: gray;
  }
`;

export const ContentArea = styled.div`
  /* margin-top: 30px; */
  display: flex;
  gap: 200px;
  p {
    padding-top: 30px;
    color: gray;
  }
  /* margin-bottom: 30px; */
`;

export const Credits = styled.div`
  color: gray;
  padding-top: 30px;
  float: left;
  display: flex;
  gap: 200px;
  justify-content: space-between;
  align-items: center;
  /* display: flex; */
  img {
    width: 130px;
    height: 40px;
    margin-left: 30px;
    display: inline-block;
    /* align-self: flex-end; */
  }

  p {
    display: block;
    /* align-items: flex-start; */
  }
`;
