import { React, useState } from "react";

import user from "../../images/user.svg";
import search from "../../images/search.svg";
import home from "../../images/home.svg";
import tv from "../../images/tv.svg";
import movie from "../../images/movie.svg";
import sports from "../../images/sports.svg";
import category from "../../images/category.svg";

import {
  IconContainer,
  IconWrapper,
  Tooltip,
  SidebarContainer,
  LogoContainer,
  Sub,
} from "./Sidebar_Style";

const SideBar = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleIconHover = () => {
    setTooltipVisible(true);
  };

  const handleIconLeave = () => {
    setTooltipVisible(false);
  };
  return (
    <SidebarContainer>
      <LogoContainer>
        <img
          alt="Disney+ Hotstar"
          src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
          class=""
          aria-hidden="false"
          width={"50px"}
          height={"35px"}
        />
      </LogoContainer>

      <Sub>
        <span>Subscribe {`>`}</span>
      </Sub>

      <IconContainer
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
      >
        <IconWrapper>
          <img src={user} fill="white" alt="" />
          <Tooltip visible={tooltipVisible}>My Space</Tooltip>
        </IconWrapper>
        <IconWrapper>
          <img src={search} fill="white" alt="" />
          <Tooltip visible={tooltipVisible}>Search</Tooltip>
        </IconWrapper>
        <IconWrapper>
          <img src={home} fill="white" alt="" />
          <Tooltip visible={tooltipVisible}>Home</Tooltip>
        </IconWrapper>

        <IconWrapper>
          <img src={tv} fill="white" alt="" />
          <Tooltip visible={tooltipVisible}>TV</Tooltip>
        </IconWrapper>

        <IconWrapper>
          <img src={movie} fill="white" alt="" />
          <Tooltip visible={tooltipVisible}>Movies</Tooltip>
        </IconWrapper>

        <IconWrapper>
          <img src={sports} fill="white" alt="" />
          <Tooltip visible={tooltipVisible}>Sports</Tooltip>
        </IconWrapper>

        <IconWrapper>
          <img src={category} fill="white" alt="" />
          <Tooltip visible={tooltipVisible}>Categories</Tooltip>
        </IconWrapper>
      </IconContainer>
    </SidebarContainer>
  );
};

export default SideBar;