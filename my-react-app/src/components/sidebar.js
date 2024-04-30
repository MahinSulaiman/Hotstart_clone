import {React,useState} from "react";
import styled from "styled-components"
import user from '../images/user.svg'
import search from '../images/search.svg'
import home from '../images/home.svg'
import tv from '../images/tv.svg'
import movie from '../images/movie.svg'
import sports from '../images/sports.svg'
import category from '../images/category.svg'



const Sub=styled.button`

  border:none;
  border-radius: 35px;
  color:orange;
  background-color: rgba(255, 165, 0, 0.2);
  margin-top:5px;
  font-size: small;
  width:88px;
  height:20px;
  margin-left:10px;
  // opacity: 0.3;
  
  
  

`;


const SidebarContainer = styled.div`
  width: 110px;
  height: 100vh;;
  background-color: #333;
  // padding: 20px;
  align-items: center;
  background-color: rgba(51, 51, 51, 0);
  // background-color:black;
  z-index: 1;
  position:fixed;
  // background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 5%, transparent 100%);
  
`;






const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
 
  gap: 35px; 


 
`;

const LogoContainer = styled.div`
  

padding-top: 30px;
padding-left: 30px;
 
`;

const Tooltip = styled.span`

 
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

const IconWrapper = styled.div`
  position: relative;
  
  &:hover  ${Tooltip} {
   
    font-weight: bold;
    font-size: 120%;
    
  }
`;



const SideBar=()=>{

  
    const [tooltipVisible, setTooltipVisible] = useState(false);
  
    const handleIconHover = () => {
      setTooltipVisible(true);
    };
  
    const handleIconLeave = () => {
      setTooltipVisible(false);
    };
    return(
       
      
        <SidebarContainer >
          <LogoContainer>
            <img alt="Disney+ Hotstar" src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" class="" aria-hidden="false" width={"50px"} height={"35px"} />
           
            

            </LogoContainer>

            <Sub><span>Subscribe</span></Sub> 

            <IconContainer onMouseEnter={handleIconHover}
          onMouseLeave={handleIconLeave}>
              <IconWrapper>
        <img src={user}   fill='white' alt="" />
        <Tooltip visible={tooltipVisible}>My Space</Tooltip>
        </IconWrapper>
       <IconWrapper>
        <img src={search}   fill='white' alt="" />
        <Tooltip visible={tooltipVisible}>Search</Tooltip>
        </IconWrapper>
        <IconWrapper>
        <img src={home}   fill='white' alt="" />
         <Tooltip visible={tooltipVisible} >Home</Tooltip>
        </IconWrapper>

        <IconWrapper>
        <img src={tv}   fill='white' alt="" />
         <Tooltip visible={tooltipVisible}>TV</Tooltip>
        </IconWrapper>

        <IconWrapper>
        <img src={movie}   fill='white' alt="" />
         <Tooltip visible={tooltipVisible}>Movies</Tooltip>
        </IconWrapper>

        <IconWrapper>
        <img src={sports}   fill='white' alt="" />
         <Tooltip visible={tooltipVisible}>Sports</Tooltip>
        </IconWrapper>

        <IconWrapper>
        <img src={category}   fill='white' alt="" />
         <Tooltip visible={tooltipVisible}>Categories</Tooltip>
        </IconWrapper>
            </IconContainer>
        </SidebarContainer>

        
            
        
        
    )

};




export default SideBar;