import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MakeCdAdmGrafico from './main/factories/pages/cdadmgrafico-factory'
import MakeCdadmweb from './main/factories/pages/cdadmweb-factory'
import MakeCdfin from './main/factories/pages/cdfin-factory'
import MakeHome from './main/factories/pages/home-factory'

const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<MakeHome />} />
        <Route path='/cdfin' element={<MakeCdfin />} />
        <Route path='/cdadmweb' element={<MakeCdadmweb />} />
        <Route path='/cdadmgrafico' element={<MakeCdAdmGrafico />} />
        <Route path='*' element={<MakeHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
