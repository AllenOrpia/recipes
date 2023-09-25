import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, BrowserRouter, Route, Link } from 'react-router-dom'

import GetAllRecipes from './components/GetAllRecipes'
import ViewRecipe from './components/ViewRecipe'
import NewRecipe from './components/NewRecipe'
function App() {
  
  return (
    <>
      <h1>Hello world</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetAllRecipes />}/>
          <Route path='/recipes/new' element={<NewRecipe />}/>
          <Route path='/recipes/:id' element={<ViewRecipe />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
