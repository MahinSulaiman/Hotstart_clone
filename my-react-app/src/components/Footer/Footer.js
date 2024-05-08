import React from "react";
import { FooterContainer, ContentArea, Content, Credits } from "./Footer_Style";

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
          <p> Terms of Use Privacy Policy FAQ</p>
        </div>
        <div>
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore"
            alt=""
          />
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore"
            alt=""
          />
        </div>
      </Credits>
    </FooterContainer>
  );
};

export default Footer;
