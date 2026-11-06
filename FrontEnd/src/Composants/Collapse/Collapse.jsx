import { useState } from "react"; // hook pour mémoriser l'état ouvert/fermé
import arrow from "../../assets/Icons/arrow.png"; // icône de la flèche
import "./Collapse.css"; // style du Collapse

// Bloc qui s'ouvre et se ferme au clic : un titre et un contenu
export default function Collapse(props) {
  // false = fermé au départ
  const [isOpen, setIsOpen] = useState(false); // mémorise l'état ouvert/fermé du Collapse

  return ( // envoie le contenu en JSX à React
    <div className="collapse">
      {/* Barre du titre : un clic inverse l'état (ouvert ↔ fermé) */}
      <button
        type="button"
        className="collapse__header" 
        onClick={() => setIsOpen(!isOpen)} // inverse l'état ouvert/fermé
      >
        <span className="collapse__title">{props.title}</span> 
        <img
          src={arrow}
          alt=""
          className={isOpen ? "collapse__arrow collapse__arrow--open" : "collapse__arrow"} 
        />
      </button>

      {/* Le contenu ne s'affiche que si le Collapse est ouvert */}
      {isOpen && <div className="collapse__content">{props.children}</div>}
    </div>
  );
}