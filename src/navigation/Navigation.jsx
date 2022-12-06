import React from 'react'
import Home from '../pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cuisine from '../components/Cuisine'
import Searched from '../components/Searched'
import Recipe from '../components/Recipe';
import NavBar from '../components/NavBar'


function Navigation() {
  return (
    <div>
      
       <BrowserRouter>
          <NavBar />
          <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cuisine/:type" element={<Cuisine />} /> 
                  <Route path="/searched/:search" element={<Searched />} />
                  <Route path="/recipes/:name" element={<Recipe />} />
          </Routes >
        </BrowserRouter>
    </div>
  )
}

export default Navigation