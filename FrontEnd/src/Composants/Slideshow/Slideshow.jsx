import { useState } from "react"; // hook pour mémoriser la photo affichée
import arrowLeft from "../../assets/Icons/arrow_left.png"; // flèche gauche
import arrowRight from "../../assets/Icons/arrow_right.png"; // flèche droite
import "./Slideshow.css"; // style du carrousel

// Carrousel : affiche les photos une par une, avec flèches et compteur
export default function Slideshow(props) {
  const pictures = props.pictures; // la liste des photos
  const total = pictures.length; // le nombre de photos
  const [index, setIndex] = useState(0); // numéro de la photo affichée (0 = la première)

  // Photo précédente : à la première, on revient à la dernière
  function previous() {
    setIndex(index === 0 ? total - 1 : index - 1); // si on est à la première, on revient à la dernière
  }

  // Photo suivante : à la dernière, on revient à la première
  function next() {
    setIndex(index === total - 1 ? 0 : index + 1); // si on est à la dernière, on revient à la première
  }

  return ( // envoie le contenu en JSX à React
    <div className="slideshow">
      <img
        src={pictures[index]}
        alt={`Photo ${index + 1} sur ${total}`}
        className="slideshow__image"
      />

      {/* Flèches et compteur seulement s'il y a plus d'une photo */}
      {total > 1 && (
        <>
          <button type="button" className="slideshow__arrow slideshow__arrow--left" onClick={previous}>
            <img src={arrowLeft} alt="Photo précédente" />
          </button>
          <button type="button" className="slideshow__arrow slideshow__arrow--right" onClick={next}>
            <img src={arrowRight} alt="Photo suivante" />
          </button>
          <p className="slideshow__counter" translate="no">
            {index + 1}/{total}
          </p>
        </>
      )}
    </div>
  );
}