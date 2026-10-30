
import logo from "../../assets/Logo/Logo-Kasa.png";

export default function Footer() {
  return ( 
    <footer className="footer">
        <img src={logo} alt="Logo Kasa" className="footer__logo" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}