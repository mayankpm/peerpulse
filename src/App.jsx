import React from "react"
import Login from './Components/Login/Loginpage'
import FLdata from "./Components/FLdata/FLdata"
import ED from "./Components/EmployerData/ED"
import Card from "./Components/Homepage/Card"
import Profile from "./Components/Profile/Profile"

function App() {

  return (
    <>
      <Login/>
      <FLdata/>
      <Card name="Mayank P M" title="AI/ML Expert"/>
      <Profile/>
    </>
    
  )
}

export default App
