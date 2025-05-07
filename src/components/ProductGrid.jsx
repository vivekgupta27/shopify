import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Shop from './Shop'
import About from './About'
import Skills from './Skills'
export default function ProductGrid({Clicked}) {
  return (
    <div className={Clicked?'absolute  z-[10]':""}>
     <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
     </Routes>
    </div>
  )
}
