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
import Register from './Pages/Register'
import Aos from 'aos'
import ScrollOnTop from './ScrollOnTop'


const App = () => {
  //aos animation
  Aos.init();
  return (
    <ScrollOnTop>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/peliculas" element={<Movies />} />
          <Route path="/pelicula/:id" element={<SingleMovie />} />
          <Route path="/mirar/:id" element={<WatchPage />} />
          <Route path="/cuenta" element={<Login />} />
          <Route path="/registrate" element={<Register />} />
          <Route path="*" element={<NotFound />} />
       </Routes>
    </ScrollOnTop>
   
  )
}

export default App