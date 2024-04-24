import React from "react";
import video from '../images/video.mp4';

const Welcome=()=>{
    return (
        <>
         <div >
      
      <video src={video}  muted autoPlay loop ></video>
      </div>
      <div className=" ml-8 pl-48 pt-45 absolute mt-44">
       <h1 className='text-white-300 pt-45 font-bold text-4xl'>Hridayam</h1>
       <h1 className='text-white-300 mt-3 ' >20/02/2024</h1>
       <h1 className='text-white-300 mt-8 '>Hridayam ( transl. Heart) is a 2022 Indian Malayalam-language coming-of-age <br></br>romantic drama film written and directed by Vineeth Sreenivasan.</h1>
        <h1 className='text-yellow-500 font-bold text-3xl mt-8'>Language - Malayalam</h1>
       <button className="bg-gray-500 w-80 hover:bg-gray-600 text-white-bold rounded-md py-2 px-2 opacity-35 mt-5"> Subscribe</button>
      </div>
        </>
    )
}

export default Welcome;