import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Room from './pages/Room'

const App = () => {
  return (
     <>
<div className='App'>
 <Routes>
   <Route path='/' element ={<Home />} />
    <Route path='/room/:roomId' element={<Room />} />
 </Routes>

</div>

     
     
     
     </>
  )
}

export default App
