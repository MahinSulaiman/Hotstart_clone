
import './App.css';


import Home from './components/Home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import MovieDetails from './components/MovieDetails/MovieDetails';







function App() {
  return (
    
   
   

      // <Home/>
      <BrowserRouter>
      
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailed" element={<MovieDetails/>} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
     

      
   


    
   
    

    
    
   
    
   
    
    
   
    
   

   
    
  );
}

export default App;
