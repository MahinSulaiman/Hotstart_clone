import { React, useEffect, useState,useCallback} from "react";
import Footer from "../Footer/Footer";
import Brands from "../Brands/Brands";

import Title from "../Title/Title";
import MovieList from "../Movies/Movies";
import ImgSlider from "../ImgSlider/ImgSlider";
import { HomeDiv,ListDiv,Heading,Slider } from "./Home_Style";
import BackgroundVideo from "./BackgoundVideo";
import video from "../../images/video.mp4";


import TitleCards from "../TitleCards/TitleCards";
// import { StarredMoviesProvider } from "../Movies/StarredMoviesContext";



const Home = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [bgColor, setBgColor] = useState("transparent");
  const [videoUrl, setVideoUrl] = useState(video);

  const changeVideo = useCallback((newUrl) => {
    setVideoUrl(newUrl);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos>200) {
        // Scrolling down
        document.getElementById("background-video").pause();
        setBgColor(" #040714");
      } 
      else {
        // Scrolling up
        document.getElementById("background-video").play();
        setBgColor("transparent");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const languageUrls=[
  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e",
  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6660/1526660-a-afdd1ecfd8ae",
  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6682/1526682-a-fd4e220ba563",
  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6685/1526685-a-5f5995a53f61",
  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6672/1526672-a-eafe6913c6c8",
  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6659/1526659-a-7271cf19114e",
  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6659/1526659-a-7271cf19114e",
  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e",
  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8124/1714043448124-a",
  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6674/1526674-a-fdd5233a7699",

  ];

  const genreUrls=[
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5262/1535262-a-fbabfaf1176e",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5285/1535285-a-88035ca1ae69",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5284/1535284-a-656c6b45a905",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5264/1535264-a-9e7871687c76",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5292/1535292-a-5739f9c84b63",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5267/1535267-a-3cae422b372e",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5288/1535288-a-690bac400aa1",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5281/1535281-a-b56dc39e5bb7",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5302/1535302-a-e90748391e0d",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5250/1535250-a-b320bf06458d",
  ];

  return (
    <HomeDiv bgColor={bgColor}>
      {/* <Background
        id="background-video"
        autoPlay
        muted
        loop
        src={video}
      ></Background> */}
      <BackgroundVideo videoUrl={videoUrl}/>

      {/* <SideBar /> */}
      <Title />

      <ListDiv>
        <Heading>Family Movies</Heading>

        

        <MovieList movieDataURL="https://api.sampleapis.com/movies/family" />


        <Heading>Comedy Movies</Heading>
        <MovieList movieDataURL="https://api.sampleapis.com/movies/comedy" />

        <Heading>Horror Movies</Heading>
        <MovieList movieDataURL="https://api.sampleapis.com/movies/horror" />
        <Brands/>

        <Heading>Popular Languages</Heading>
        <TitleCards urls={languageUrls}/>
        
        <Heading>Popular Genres</Heading>
        <TitleCards urls={genreUrls}/>

        <Heading>Popular in Kids</Heading>
        <MovieList movieDataURL="https://api.sampleapis.com/movies/animation"/>
        
        
        
      </ListDiv>
      <Slider>
        <ImgSlider onVideoChange={changeVideo} />
      </Slider>
      <Footer/>
     
     
    </HomeDiv>
  
  );
};

export default Home;

// #ma
