import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Hero from '../components/Ui/Hero'
import About from '../components/Ui/About'
import BrowseMenue from '../components/Ui/BrowseMenue'
import LoginSignup from '../components/Ui/Login'


const Navigation = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/'  element={<Hero/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/browse'  element={<BrowseMenue/>}/>
        <Route path='/login'  element={<LoginSignup/>}/>
        
    </Routes>
    </BrowserRouter>
  )
}

export default Navigation