import React from 'react'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:pax-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/result' element={<Result/>}></Route>
        <Route path='/buy' element={<BuyCredit/>}></Route>
      </Routes>
    </div>
  )
}

export default App
