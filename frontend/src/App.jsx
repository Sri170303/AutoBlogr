import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/blog' element={<Blog />}/>
        </Routes>
    </div>
  )
}

export default App