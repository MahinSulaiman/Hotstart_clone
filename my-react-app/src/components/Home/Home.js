import { React, useEffect, useState } from "react";



import video from "../../images/video.mp4";
import SideBar from "../Sidebar/Sidebar";
import Title from "../Title/Title";
import MovieList from "../Movies/Movies";
import ImgSlider from "../ImgSlider/ImgSlider";
import { HomeDiv,Background,ListDiv,Heading,Slider } from "./Home_Style";


const Home = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos < currentScrollPos) {
        // Scrolling down
        document.getElementById("background-video").pause();
        setBgColor("#040714");
      } else {
        // Scrolling up
        document.getElementById("background-video").play();
        setBgColor("transparent");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <HomeDiv bgColor={bgColor}>
      <Background
        id="background-video"
        autoPlay
        muted
        loop
        src={video}
      ></Background>

      <SideBar />
      <Title />

      <ListDiv>
        <Heading>Family Movies</Heading>

        <MovieList movieDataURL="https://api.sampleapis.com/movies/family" />

        <Heading>Comedy Movies</Heading>
        <MovieList movieDataURL="https://api.sampleapis.com/movies/comedy" />

        <Heading>Horror Movies</Heading>
        <MovieList movieDataURL="https://api.sampleapis.com/movies/horror" />
      </ListDiv>
      <Slider>
        <ImgSlider />
      </Slider>
    </HomeDiv>
  );
};

export default Home;

// #ma
