import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch} = useContext(ContextGlobal) //este esatdo hice en el global context
  return (
    
      <div>
        <nav className= "nav"style ={{background: state.bgFlag, justifyContent: "space-between", display: "flex", padding: "0.6rem 1rem", alignItems: "center"}}>
        
        <h1>
      
          <span style={{color:"red", fontSize: "32px"}}>D</span>H Odonto
        </h1>
          <ul style={{display: "flex", gap: "1.5rem", fontSize:"1.5rem", fontWeight:"bold", paddingRight:"95px"}}>
          <Link to= "/" style={{textDecoration:"none", color:state.ftColor}}>Home</Link>
        
           <Link to= "/Contact" style={{textDecoration:"none", color:state.ftColor}}>Contact</Link>
      
           <Link to= "/Favs" style={{textDecoration:"none", color:state.ftColor}}>Favs</Link>
          </ul>
          
    
      
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button className = "dark" style={{backgroundColor: state.ftColor, color: state.bgColor, fontSize: "1rem", width:"50px"}} onClick={() => dispatch ({bgFlag: state.bgFlag})}>{state.bgFlag === "DARK" ? "☀" :"🌙"}</button>
      </nav>
   
      </div>

  
  )
}

export default Navbar