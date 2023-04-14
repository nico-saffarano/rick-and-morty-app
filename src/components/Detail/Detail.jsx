import React from "react";
import styles from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "dc4d6486baa4.8a4d7bab6421f4d940a3";

export const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

 
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>Name: {character?.name}</h2>
        <h2>Status: {character?.status}</h2>
        <h2>Species: {character?.species}</h2>
        <h2>Gender: {character?.gender}</h2>
        <h2>Origin: {character?.origin?.name}</h2>
      </div>
      <div className={styles.imgContainer}>
        <img
          src={character?.image}
          alt={character?.name}
          className={styles.img}
        />
      </div>
    </div>
  );
};
