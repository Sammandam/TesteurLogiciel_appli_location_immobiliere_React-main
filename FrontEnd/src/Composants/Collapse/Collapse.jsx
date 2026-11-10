import { useState } from "react"; // hook pour mémoriser l'état ouvert/fermé
import arrow from "../../assets/Icons/arrow.png"; // icône de la flèche
import "./Collapse.css"; // style du Collapse

// Bloc qui s'ouvre et se ferme au clic : un titre et un contenu
export default function Collapse(props) {
  // false = fermé au départ
  const [isOpen, setIsOpen] = useState(false);

  return ( // envoie le contenu en JSX à React
    <div className="collapse">
      {/* Barre du titre : un clic inverse l'état (ouvert ↔ fermé) */}
      <button
        type="button"
        className="collapse__header"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="collapse__title">{props.title}</span>
        <img
          src={arrow}
          alt=""
          className={isOpen ? "collapse__arrow collapse__arrow--open" : "collapse__arrow"}
        />
      </button>

      {/* Applique la classe CSS pour ouvrir ou fermer le contenu */}
      <div className={isOpen ? "collapse__wrapper collapse__wrapper--open" : "collapse__wrapper"}>
        <div className="collapse__content">
          <div className="collapse__inner">{props.children}</div>
        </div>
      </div>
    </div>
  );
}