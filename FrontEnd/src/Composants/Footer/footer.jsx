import "./Footer.css";
import logo from "../../assets/Logo/Logo-Kasa.png";

export default function Footer() {
  return ( 
    <footer className="footer">
        <img src={logo} alt="Logo Kasa" className="header__logo" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
};