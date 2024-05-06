// Footer.js

import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #040714;
  color: #fff;
  padding: 60px;
  text-align: center;
  margin-top: 20px;
  position: relative; /* Ensure the footer is positioned relative to HomeDiv */
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 30%, transparent 100%);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Your Website. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
