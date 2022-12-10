import React, {useContext} from "react";
import styles from "./Card.module.css";
import getFavsStore from "./utils/getFavsStore";
import { Link } from "react-router-dom";
import imgDoctor from "../Routes/doctor.jpg";
import { ContextGlobal } from "../Components/utils/global.context";

const Card = ({ odontologo, setFavsPageItems }) => {
  const { state, dispatch} = useContext(ContextGlobal)
  const updateFavs = (favs) => {
    if (setFavsPageItems) {
      setFavsPageItems(favs);
    }
    const favsJson = JSON.stringify(favs);
    localStorage.setItem('favs', favsJson);
  }
   
  const handleFavClick = () => {
    let favsStore = getFavsStore();

    let newFavs = [];
    if (!favsStore.find(fav => fav.id === odontologo.id)) {
      newFavs = [...favsStore, odontologo];
      alert("Haz agregado " + " " + odontologo.name + " " + "a tu lista de odontologos favoritos!😁")
    } else {
      newFavs = favsStore.filter(fav => fav.id !== odontologo.id);
      alert("Haz eliminado a" + " " +  odontologo.name + " " + " de tu lista de odontologos favoritos!😮")
    }

    updateFavs(newFavs);
  };

  return (
    <div className={styles.card} style={{backgroundColor: state.bgColor, color: state.ftColor}}>
      <Link to={`/odontologo/${odontologo.id}`}><img src={imgDoctor} alt="Imagen doctor" /></Link>
      <h2>{odontologo.name}</h2>
      <h4>{odontologo.username}</h4>
      <button onClick={handleFavClick}style={{backgroundColor:"#cfffca", fontSize:"0.7rem"}}>
        Add ❤️
      </button>
    </div>
  );
};

export default Card;
