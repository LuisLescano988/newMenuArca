import './App.css'
import Home from "./views/Landing"
import { Route, Routes } from 'react-router-dom'
import Spanish from "./views/Spanish"
import English from "./views/English"
import Food from './views/Food'
import Drinks from './views/Drinks'
import Comidas from './views/Comidas'
import Bebidas from './views/Bebidas'


function App() {

  return (
    <div className=' bg-black'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spanish" element={<Spanish />} />
        <Route path="/english" element={<English />} />
        <Route path="/food" element={<Food />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/comida" element={<Comidas />} />
        <Route path="/bebidas" element={<Bebidas />} />
      </Routes>
    </div>
  )
}

export default App
