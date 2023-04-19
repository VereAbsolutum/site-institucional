import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, NotFound, Cdfin, CdadmWeb, CdadmGrafico } from './presentation/pages'

const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cdfin' element={<Cdfin />} />
        <Route path='/cdadmweb' element={<CdadmWeb />} />
        <Route path='/cdAdmgrafico' element={<CdadmGrafico />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
