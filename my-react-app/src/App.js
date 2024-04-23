
import './App.css';
import SideBar from './components/sidebar';
import video from './images/video.mp4';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">

      {/* <h1 className='text-red-500'>Hello World!</h1> */}
      <div >
      
      <video src={video}  muted autoPlay loop ></video>
      </div>

      
     

      
     
      
      
    </div>
    
    <SideBar/>
   
    
    </>

   
    
  );
}

export default App;
