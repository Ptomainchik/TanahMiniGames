import { Counter } from "./Components/Couter";
import { Game } from "./Components/Game";
import { HomePage } from "./Components/HomePage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="game" element={<Game/>}/>
        <Route path="counter" element={<Counter/>}/>
    </Routes>
      
    </BrowserRouter>
      
    </>
  )
}

export default App
