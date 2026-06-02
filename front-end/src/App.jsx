import React from 'react'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import "./css/App.css"

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  )
}

export default App