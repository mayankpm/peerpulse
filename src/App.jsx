import React from "react"
import Login from './Components/Login/Loginpage'
import FLdata from "./Components/FLdata/FLdata"
import ED from "./Components/ED/ED"
import Profile from "./Components/Profile/Profile"
import CardsList from './Components/Choose/CardsList'
import Choose from "./Components/Choose/Choose"
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Choose' element={<Choose/>}/>
        <Route path='/FLdata' element={<FLdata/>}/>
        <Route path='/ED' element={<ED/>}/>
        <Route path='/CardsList' element={<CardsList/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </Router>

      {/* <ED/> */}
    </>
    
  )
}

export default App
