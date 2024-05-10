import { React,useContext} from "react";
import styled from "styled-components";
import { StarredMoviesContext } from "../Movies/StarredMoviesContext";








const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  color: blue;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
 background-color: black;
`;

const Modal = ({ isOpen, onClose, children }) => {
    const { starredMovies } = useContext(StarredMoviesContext);




  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>hello</CloseButton>
       <div style={{display:"flex"}}>
      <h2>Starred Movies</h2>
      
        {starredMovies.map((movieUrl, index) => (
          <img src={movieUrl} key={index}></img >
        ))}
      
    </div>
        {/* {children} */}
        {/* <img src={image} alt=""/> */}
       

      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
