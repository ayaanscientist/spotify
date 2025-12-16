import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ShowSongs from "../pages/ShowSongs";
import ShowArtist from "../pages/ShowArtist";
import ShowRadio from "../pages/ShowRadio";
import ShowAlbums from "../pages/ShowAlbums";
import ShowChart from "../pages/ShowChart";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/songs" element={<ShowSongs />} />
      <Route path="/artist" element={<ShowArtist />} />
      <Route path="/albums" element={<ShowAlbums />} />
      <Route path="/radio" element={<ShowRadio />} />
      <Route path="/chart" element={<ShowChart />} />
    
    </Routes>
  );
}
