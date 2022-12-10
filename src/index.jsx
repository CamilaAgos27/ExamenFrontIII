import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom"
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import Detail  from './Routes/Detail'
import ReactDOM from "react-dom/client";
import React from "react";
import ContextProvider from "./Components/utils/global.context"
import App from "./App"


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
      <Routes>
          <Route element= {<App/>}>
            <Route path="/" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Favs" element={<Favs/>} />
          <Route path="/odontologo/:id" element={<Detail/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  </ContextProvider>
    
</React.StrictMode>
);


