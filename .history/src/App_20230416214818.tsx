import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, NotFound, Cdfin } from './presentation/pages'

const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cdAdmgrafico' element={<Cdfin />} />
        <Route path='/cdAdmgrafico' element={<Product />} />
        <Route path='/cdAdmgrafico' element={<Product />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
