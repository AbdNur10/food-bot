import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Breakfast from '../components/Ui/Breakfast'
import Launch from '../components/Ui/Launch'
import Dinner from '../components/Ui/   Dinner'
import Dessert from '../components/Ui/Dessert'

const Foods = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/break'  element={<Breakfast/>}/>
        <Route path='/lunch'  element={<Launch/>}/>
        <Route path='/dinner'  element={<Dinner/>}/>
        <Route path='/dessert'  element={<Dessert/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Foods