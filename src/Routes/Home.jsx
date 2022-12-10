import { useEffect, useState, useContext } from 'react'
import Card from "../Components/Card"
import axios from "axios"
import { ContextGlobal } from "../Components/utils/global.context";



const Home = () => {
  const [odontologos, setodontologos] = useState ([]);
  const { state, dispatch} = useContext(ContextGlobal)

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setodontologos(res.data));

    const favsJson = localStorage.getItem('favs');
    if (!favsJson) {
      localStorage.setItem('favs', JSON.stringify([]));
    }
  }, []);


  return (
    <main>
      <h1 style={{fontSize: "1.5rem", textAlign: "center", padding: "0.4rem"}}>ODONTOLOGOS</h1>
      <div style=
      {{display:"flex",
      justifyContent: "start",
      gap:"1rem", width:"90vw", 
      height:"auto", 
      flexWrap:"wrap", 
      margin: "0 auto",
      backgroundColor: state.bgColor, 
      color: state.ftColor}}>

        {odontologos.map((odontologo) => {
          return <Card odontologo={odontologo} key={odontologo.id} />;
        })}
      </div>
    </main>
  )
}

export default Home