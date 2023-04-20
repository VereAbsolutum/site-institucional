import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MakeCdadmweb from './main/factories/pages/cdadmweb-factory'
import MakeHome from './main/factories/pages/home-factory'
import { Home, NotFound, Cdfin, CdadmWeb, CdadmGrafico } from './presentation/pages'

const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<MakeHome />} />
        <Route path='/cdfin' element={<Cdfin />} />
        <Route path='/cdadmweb' element={<MakeCdadmweb />} />
        <Route path='/cdadmgrafico' element={<CdadmGrafico />} />
        <Route path='*' element={<MakeHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
