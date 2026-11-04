import { Link } from "react-router"; // lien vers la page du logement
import "./Card.css"; // style de la carte

// Carte d'un logement : image, titre, et lien vers sa page
export default function Card(props) {
  return ( // envoie le contenu en JSX à React
    <Link to={`/logement/${props.id}`} className="card">
      <img src={props.cover} alt={props.title} className="card__image" />
      <h2 className="card__title">{props.title}</h2>
    </Link>
  );
}