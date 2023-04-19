import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, NotFound } from './presentation/pages'

const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
