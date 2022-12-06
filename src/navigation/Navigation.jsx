import React from 'react'
import Home from '../pages/Home'
import Category from '../components/Category'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cuisine from '../components/Cuisine'
import Searched from '../pages/Searched'
import Recipe from '../pages/Recipe'
import Search from '../components/Search'
import Logo from '../pages/Logo'


function Navigation() {
  return (
    <div>
      
       <BrowserRouter>
           <Logo/>
           <Search />
           <Category />
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