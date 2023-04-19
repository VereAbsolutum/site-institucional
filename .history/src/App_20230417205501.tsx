import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MakeHome from './main/factories/pages/home-factory'
import { Home, NotFound, Cdfin, CdadmWeb, CdadmGrafico } from './presentation/pages'

const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<MakeHome />} />
        <Route path='/cdfin' element={<Cdfin />} />
        <Route path='/cdadmweb' element={<CdadmWeb />} />
        <Route path='/cdAdmgrafico' element={<CdadmGrafico />} />
        <Route path='*' element={<MakeHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
