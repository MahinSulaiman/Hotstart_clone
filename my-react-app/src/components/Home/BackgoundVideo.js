import React from "react";
import {Background} from "./Home_Style";
// import video from "../../images/video.mp4";



const BackgroundVideo=({videoUrl})=>{
    return(

        <Background
        id="background-video"
        autoPlay
        muted
        loop
       src={videoUrl}
      ></Background>
    );
}

export default BackgroundVideo;