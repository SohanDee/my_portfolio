import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Projects from './Pages/Projects'
import NotFound from './Pages/NotFound'
import Header from './Components/Header'

export default function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
