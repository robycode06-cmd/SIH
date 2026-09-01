import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
         <Route path='/about-us' element={<Aboutus/>}></Route>
      </Routes>
    </div>
  )
}

export default App