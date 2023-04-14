import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  let [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.container}>
      <input
        type="search"
        className={style.input}
        onChange={handleChange}
        value={id}
      />
      <button onClick={()=>onSearch(id)} className={style.button}>
        Agregar
      </button>
    </div>
  );
}
