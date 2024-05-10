
import './App.css';


import Home from './components/Home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MovieDetails from './components/MovieDetails/MovieDetails';
import SideBar from './components/Sidebar/Sidebar';
import { StarredMoviesProvider } from './components/Movies/StarredMoviesContext';








function App() {
  return (
    
   
   

      // <Home/>
      <StarredMoviesProvider>
    
      <BrowserRouter>
      
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailed" element={<MovieDetails/>} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
      </StarredMoviesProvider>
      
     

      
   


    
   
    

    
    
   
    
   
    
    
   
    
   

   
    
  );
}

export default App;
