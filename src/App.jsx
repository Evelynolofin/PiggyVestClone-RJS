import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './static/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import PiggyBank from "./pages/Piggybank";
import Home from "./pages/Home"
import Invest from './pages/Invest'
import Stories from './pages/Stories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Invest' element={<Invest/>}/>
      <Route path='/Stories' element={<Stories/>}/>
      {/* <Route path='/Piggybank' element={<Piggybank/>}/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App
