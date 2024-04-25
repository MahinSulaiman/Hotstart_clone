
import './App.css';
import SideBar from './components/sidebar';
import Welcome from './components/welcome';
import MovieList from './components/movies';



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
   
   
   
      <Welcome/>
      <div className='h-screen w-24 z-12 fixed'>
      <SideBar/>
      </div>
      

      <div className='relative top-96 -z-1 opacity-35'>

        <MovieList/>

      </div>
     

      
   


    
   
    

    
    
   
    
   
    
    
   
    
    </>

   
    
  );
}

export default App;
