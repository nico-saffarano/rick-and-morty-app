import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css";
import logo from "../../resources/logo.png";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className={styles.nav}>
      <img src={logo} alt="logo" className={styles.logo} />
      <SearchBar onSearch={onSearch} className={styles.searchBar} />
      <button>
        <Link to="/about">About</Link>
      </button>
      <button>
        <Link to="/home">Home</Link>
      </button>
    </div>
  );
};

export default Nav;
