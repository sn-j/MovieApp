import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';

import Category from './Components/Category';
import MoviePage from './Components/MoviePage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:path' element={<Category />} />
        <Route path='/moviepage/:category/:path' element={<MoviePage />} />
      </Routes>
    </>
  )
}
export default App
