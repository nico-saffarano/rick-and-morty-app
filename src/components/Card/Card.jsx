import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  species,
  gender,
  image,
  origin,
  onClose,
}) {
  return (
    <div className={style.card}>
      <button onClick={() => onClose(id)} className={style.button}>
        X
      </button>
      <h2>
        <Link to={`/detail/${id}`}>{name}</Link>
      </h2>
      <img src={image} alt={name} className={style.imageCard} />
      <h2>species:{species}</h2>
      <h2>gender:{gender}</h2>
    
    </div>
  );
}
