import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Drizzy from './components/Drizzy'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' exact element = {<Home/>} />
        <Route path='/navbar' exact element = {<Navbar/>} />
        <Route path='/drizzy' exact element = {<Drizzy/>} />
      </Routes>
    </div>
  )
}

export default App
