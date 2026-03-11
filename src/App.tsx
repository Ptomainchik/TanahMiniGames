import { GameMemory1lvl } from "./Components/MemoryGame/GameMemory1lvl";
import { GameMemory2lvl } from "./Components/MemoryGame/GameMemory2lvl";
import { GameMemory3lvl } from "./Components/MemoryGame/GameMemory3lvl ";
import { GameMemory4lvl } from "./Components/MemoryGame/GameMemory4lvl";
import { HomePage } from "./Components/HomePage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GameSorting1lvl } from "./Components/SortingGame/GameSorting1lvl";

function App() {

  return (
    <>

    <BrowserRouter basename="/TanahMiniGames">
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="memory1" element={<GameMemory1lvl/>}/>
          <Route path="memory2" element={<GameMemory2lvl/>}/>
          <Route path="memory3" element={<GameMemory3lvl/>}/>
          <Route path="memory4" element={<GameMemory4lvl/>}/>
          <Route path="sort1" element={<GameSorting1lvl/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
