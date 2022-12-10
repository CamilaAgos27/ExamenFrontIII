import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  let {id} = useParams()

  const [odontologoDetalle, setOdontologoDetalle] = useState([]);
  
  useEffect(()=>{
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setOdontologoDetalle(res.data))
    }, []);

  return (
    <>
      <h1 style={{justify:"center"}}>Detail Dentist id </h1>
        <main style=
        {{display:"flex", 
        flexWrap:"wrap", 
        border:"solid black 2px"}}>
          <table  border="1" width="100%" align="center" cellpadding="10px">
            <tr align="center">
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Website</td>
            </tr>
            <tr align="center">
                <td>{odontologoDetalle.name}</td>
                <td>{odontologoDetalle.email}</td>
                <td>{odontologoDetalle.phone}</td>
                <td>{odontologoDetalle.website}</td>
            </tr>
          </table> 
        </main>
    </>
  )
}

export default Detail