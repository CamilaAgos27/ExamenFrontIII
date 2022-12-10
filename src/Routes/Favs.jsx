import Card from "../Components/Card";
import getFavsStore from "../Components/utils/getFavsStore";
import { useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favsPageItems, setFavsPageItems] = useState(getFavsStore())

  return (
    <>
      <h1 style={{textAlign: "center", marginBottom: "80px"}}>Favorite Dentist</h1>
      <div className="card-grid" 
      style=
        {{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}>
      
        {favsPageItems.map(fav => <Card odontologo={fav} key={fav.id} setFavsPageItems={setFavsPageItems} />)}
      </div>
    </>
  );
};

export default Favs;
