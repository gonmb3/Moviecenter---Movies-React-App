import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Movies from './Pages/Movies'
import SingleMovie from './Pages/SingleMovie'
import WatchPage from './Pages/WatchPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<AboutUs />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/peliculas" element={<Movies />} />
      <Route path="/pelicula/:id" element={<SingleMovie />} />
      <Route path="/mirar/:id" element={<WatchPage />} />
      <Route path="/iniciarsesion" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App