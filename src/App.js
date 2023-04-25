import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Form from "./components/Form/Form.jsx";
import { Detail } from "./components/Detail/Detail.jsx";
import { useState ,useEffect} from "react";
import axios from "axios";
import { Routes, Route, useLocation,useNavigate} from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "dc4d6486baa4.8a4d7bab6421f4d940a3";

const email = 'user@gmail.com';
const password = '123asd'

function App() {
  
  const location = useLocation();
  const navigate = useNavigate();
  let [access,setAccess] = useState(false);
  let [characters, setCharacters] = useState([]);

  const login = (userData) => {
    if(userData.email === email && userData.password === password){
       setAccess(true);
       navigate('/home');
    }
 }

 useEffect(() => {
  !access && navigate('/')
}, [access, navigate])

  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App">
      {
        location.pathname !== '/' 
        ? <Nav onSearch={onSearch} className="nav" />
        : null
      }
      <hr />
      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>

      <hr />
    </div>
  );
}

export default App;
