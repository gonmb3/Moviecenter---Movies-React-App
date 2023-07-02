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
import Profile from './Pages/Dashboard/Profile'
import Aos from 'aos'
import Password from './Pages/Dashboard/Password'
import FavoritesMovies from './Pages/Dashboard/FavoritesMovies'
import MovieList from './Pages/Dashboard/Admin/MovieList'
import Dashboard from './Pages/Dashboard/Admin/Dashboard'
import Categories from './Pages/Dashboard/Admin/Categories'


const App = () => {
  //aos animation
  Aos.init();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<AboutUs />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/peliculas" element={<Movies />} />
      <Route path="/pelicula/:id" element={<SingleMovie />} />
      <Route path="/mirar/:id" element={<WatchPage />} />
      <Route path="/cuenta" element={<Login />} />
      <Route path="/registrate" element={<Register />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/contraseña" element={<Password />} />
      <Route path="/favoritos" element={<FavoritesMovies />} />
      <Route path="/mi-lista" element={<MovieList />} />
      <Route path="/categorias" element={<Categories />} />
      <Route path="/panel" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App