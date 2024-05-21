import React from 'react'
import './App.css'
import Navbar from './navbar'
import Todolist from './Todolist'
import Login from './login'
import Calculator from './calculator'
import Text from './text'
import Products from './products'
import Quiz from './quiz'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'




function App() {
 
  return (
    <div className='App1'>
        
<Router>
    <Navbar/>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/Todolist' element={<Todolist/>}></Route>
    <Route path='/calculator' element={<Calculator/>}></Route>
    <Route path='/text' element={<Text/>}></Route>
    <Route path='/products' element={<Products/>}></Route>
    <Route path='/quiz' element={<Quiz/>}></Route>
  </Routes>
</Router>

    </div>
  )
}

export default App;
