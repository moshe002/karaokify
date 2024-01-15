import { useState } from 'react';
import { SongContext } from './context/songContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import SongBook from "./pages/songBook";
import Singpage from "./pages/singpage";

function App() {

  const [song, setSong] = useState<string>("");

  return (
    <BrowserRouter>
      <SongContext.Provider value={song}>
        <Routes>
          <Route path="/" element={<Homepage setSong={setSong} song={song} />} />
          <Route path="/songbook" element={<SongBook setSong={setSong} />} />
          <Route path="/sing" element={<Singpage />} />
        </Routes>
      </SongContext.Provider>
    </BrowserRouter>
  )
}

export default App
