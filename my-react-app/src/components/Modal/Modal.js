import { React, useContext } from "react";
import { StarredMoviesContext } from "../Movies/StarredMoviesContext";
import DisplayMovie from "../Movies/DisplayMovie";
import { ModalOverlay, ModalContainer, CloseButton,Header,Content } from "./Modal_Style";

const Modal = ({ isOpen, onClose }) => {
  const { starredMovies } = useContext(StarredMoviesContext);
  const imageUrlsArray = [...starredMovies];

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
        <CloseButton onClick={onClose}>x</CloseButton>
        <h1> Favourite Movies</h1>
        </Header>

        
<Content >
        <DisplayMovie imageUrls={imageUrlsArray} onClose={onClose} />
        </Content>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
