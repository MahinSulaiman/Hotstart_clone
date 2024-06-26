import { React, useState ,useContext} from "react";

import user from "../../images/user.svg";
import search from "../../images/search.svg";
import home from "../../images/home.svg";
import tv from "../../images/tv.svg";
import movie from "../../images/movie.svg";
import sports from "../../images/sports.svg";
import category from "../../images/category.svg";
import favourites from "../../images/favourites.svg";
import Modal from "../Modal/Modal";
import { StarredMoviesContext } from "../Movies/StarredMoviesContext";

import {
  IconContainer,
  IconWrapper,
  Tooltip,
  SidebarContainer,
  LogoContainer,
  Sub,
} from "./Sidebar_Style";

const SideBar = () => {

  const { starredMovies } = useContext(StarredMoviesContext);
 
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const count=starredMovies.length;


  return (
    <SidebarContainer>
      <LogoContainer>
        <img
          alt="Disney+ Hotstar"
          src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
          class=""
          aria-hidden="false"
          
         
        />
      </LogoContainer>

      <Sub>
        <span>Subscribe {`>`}</span>
      </Sub>

      <IconContainer
         onMouseEnter={() =>  setTooltipVisible(true)}
         onMouseLeave={() =>  setTooltipVisible(false)}
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

        <IconWrapper onClick={()=>setIsModalOpen(true)}>
        {count !== 0 && <span id="count">{count}</span>}
          <img src={favourites}  fill="white" alt="" />
          
          <Tooltip visible={tooltipVisible}>Favourites</Tooltip>
        </IconWrapper>
      </IconContainer >
      <Modal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}  >

        
      </Modal>
    </SidebarContainer>
  );
};

export default SideBar;
