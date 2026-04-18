import { GameMemory1lvl } from "./Components/MemoryGame/GameMemory1lvl";
import { GameMemory2lvl } from "./Components/MemoryGame/GameMemory2lvl";
import { GameMemory3lvl } from "./Components/MemoryGame/GameMemory3lvl ";
import { GameMemory4lvl } from "./Components/MemoryGame/GameMemory4lvl";
import { HomePage } from "./Components/HomePage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GameSorting1lvl } from "./Components/SortingGame/GameSorting1lvl";
import { GameSorting2lvl } from "./Components/SortingGame/GameSorting2lvl";
import { GameSorting3lvl } from "./Components/SortingGame/GameSorting3lvl";
import { GameSorting4lvl } from "./Components/SortingGame/GameSorting4lvl";
import { GameThree1lvl } from "./Components/MatchThreeGame/GameThree1lvl";
import { GameThree2lvl } from "./Components/MatchThreeGame/GameThree2lvl";
import { GameThree3lvl } from "./Components/MatchThreeGame/GameThree3lvl";
import { GameThree4lvl } from "./Components/MatchThreeGame/GameThree4lvl";

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
          <Route path="sort2" element={<GameSorting2lvl/>}/>
          <Route path="sort3" element={<GameSorting3lvl/>}/>
          <Route path="sort4" element={<GameSorting4lvl/>}/>
          <Route path="three1" element={<GameThree1lvl/>}/>
          <Route path="three2" element={<GameThree2lvl/>}/>
          <Route path="three3" element={<GameThree3lvl/>}/>
          <Route path="three4" element={<GameThree4lvl/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
