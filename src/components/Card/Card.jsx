import { connect } from "react-redux";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState,useEffect } from "react";

function Card({id, name, status, species, gender, image, onClose, addFav, removeFav, myFavorites}) {

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
     if(isFav){
        setIsFav(false);
        removeFav(id);
     }
     else {
        setIsFav(true);
        addFav({id, name, species, gender, image, onClose})
     }
  }

  useEffect(() => {
     myFavorites.forEach((fav) => {
        if (fav.id === id) {
           setIsFav(true);
        }
     });
  }, [myFavorites]);
  return (
    <div className={style.card}>
      {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
      <button onClick={() => onClose(id)} className={style.button}>
        X
      </button>
      <h2>
        <Link to={`/detail/${id}`}>{name}</Link>
      </h2>
      <img src={image} alt={name} className={style.imageCard} />
      <h2>Specie: {species}</h2>
      <h2>Gender: {gender}</h2>
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    myFavorites: state.myFavorites
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
