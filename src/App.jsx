import './App.css'
import Home from "./views/Landing"
import { Route, Routes } from 'react-router-dom'
import Spanish from "./views/Spanish"
import English from "./views/English"
import Food from './views/Food'
import Drinks from './views/Drinks'
import Comidas from './views/Comidas'
import Bebidas from './views/Bebidas'
import Cocktails from './views/Cocktails'
import Wines from './views/Wines'
import Beverages from './views/Beverages'
import Carte from './views/Carte'
import Tasting from './views/Tasting'
import Prefix from './views/Prefix'
import Carta from './views/Carta'
import Degustacion from './views/Degustacion'
import Prefij from './views/Prefij'
import Cocteles from './views/Cocteles'
import Vinos from './views/Vinos'
import Brebajes from './views/Brebajes'


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
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/wines" element={<Wines />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/carte" element={<Carte />} />
        <Route path="/tasting" element={<Tasting />} />
        <Route path="/prefix" element={<Prefix />} />
        <Route path="/cocteles" element={<Cocteles />} />
        <Route path="/vinos" element={<Vinos />} />
        <Route path="/bebid" element={<Brebajes />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/degustacion" element={<Degustacion />} />
        <Route path="/prefij" element={<Prefij />} />
      </Routes>
    </div>
  )
}

export default App
