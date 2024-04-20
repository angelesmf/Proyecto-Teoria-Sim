
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/home';
import Simulador from './pages/simulador';
import GuiaVisual from './pages/guia-visual';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="simulador" element={<Simulador/>} />
          <Route path="guia" element={<GuiaVisual/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
