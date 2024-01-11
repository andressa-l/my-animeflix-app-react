import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AnimeItem from "./Components/animeItem/AnimeItem";
import Gallery from "./Components/gallery/Gallery";
import Homepage from "./Components/home/Homepage";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import "./App.css";

function App() {
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/anime/:id" element={<AnimeItem />} />
          <Route path="/character/:id" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;