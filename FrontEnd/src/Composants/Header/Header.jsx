import { NavLink } from "react-router";
import "./Header.css";
import logo from "../../assets/Logo/Logo-Kasa.png";

export default function Header() {
  return ( 
    <header className="header">
      <img src={logo} alt="Logo Kasa" className="header__logo" />
      <nav className="header__nav">
        <ul className="header__list">
          <li><NavLink to="/" className="header__link">Accueil</NavLink></li>
          <li><NavLink to="/about" className="header__link">A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

