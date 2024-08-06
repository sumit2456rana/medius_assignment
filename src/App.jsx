import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Mortage_Calc from './pages/Mortage_Calc'
import Start from './pages/Start'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/mortage-calculator' element={<Mortage_Calc />} />
        <Route path='/start' element={<Start />} />
      </Routes>
    </>
  )
}

export default App
