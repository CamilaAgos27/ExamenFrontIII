import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import React, { useState } from 'react'
import { ContextGlobal } from "./Components/utils/global.context"
import {useContext} from "react"



function App() {
  const { state } = useContext(ContextGlobal)
  return (
    <main style={{backgroundColor:state.bgColor, color:state.ftColor, width: "100%", height:"100vh", minHeight: "100%"}}>
    <div className="App" style={{backgroundColor:state.bgColor, color:state.ftColor }}> 
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
      </main>
  )
}

export default App;
