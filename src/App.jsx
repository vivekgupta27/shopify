import { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Context from './context/Context';

function App() {
  return (
   <Context> 
    <BrowserRouter>
   
       <Home/>
    </BrowserRouter>
   </Context>
  )
}

export default App
