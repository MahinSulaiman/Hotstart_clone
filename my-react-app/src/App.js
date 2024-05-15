import "./App.css";

import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import SideBar from "./components/Sidebar/Sidebar";
import { StarredMoviesProvider } from "./components/Movies/StarredMoviesContext";
import { SelectedMovieProvider } from "./components/MovieDetails/SelectedMoviesContext";

function App() {
  return (
    // <Home/>
    <StarredMoviesProvider>
      <SelectedMovieProvider>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailed/:title" element={<MovieDetails />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
      </SelectedMovieProvider>
    </StarredMoviesProvider>
  );
}

export default App;
