// Footer.js

import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`

/* height:300px; */

  background-color: #040714;
  color: #fff;
  padding: 60px;
  text-align: center;
  /* margin-top: 20px; */
  position: relative; /* Ensure the footer is positioned relative to HomeDiv */
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 30%,  100%);
  padding-left: 130px;
  padding-top: 160px;
  padding-bottom: 30px;
  
  
`;

const Content=styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:10px;
  h1{
    font-weight: bold;
    padding-bottom: 15px;
  }
  p{
    color: gray;
    
  }
    
`;

const ContentArea=styled.div`
   /* margin-top: 30px; */
    display: flex;
    gap:200px;
    p{
      padding-top:30px;
      color: gray;
      
    }
    /* margin-bottom: 30px; */
`;

const Credits=styled.div`
   color:gray;
   padding-top:30px;
   float: left;
   display: flex;
   gap: 200px;
    justify-content: space-between;
    align-items: center;
  /* display: flex; */
   img{
    width: 130px;
    height:40px;
    margin-left: 20px;
    display: inline-block;
    align-self: flex-end;
    
   }

   p{
    display: block;
      align-items: flex-start;
   }

`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* <p>© 2024 Your Website. All rights reserved.</p> */}

      <ContentArea>

      <Content>
        <h1>Company</h1>
        <p>About Us</p>
        <p>Careers</p>
      
      </Content>

      <Content>
        <h1>View Website in</h1>
        <p>English</p>
      </Content>

      <Content>
        <h1>Need Help?</h1>
        <p>Visit Help Center</p>
        <p>Share Feedback</p>
      </Content>

      <Content>
        <h1>Connect With Us</h1>
      </Content>
      </ContentArea>
<Credits>
<div>
      <p>© 2024 Your Website. All rights reserved.</p>
       <p> Terms of Use Privacy Policy FAQ
      </p>
      </div>
      <div >
      <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore" alt="" />
      <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore" alt=""/>
      </div>
      </Credits>

    </FooterContainer>
  );
};

export default Footer;
