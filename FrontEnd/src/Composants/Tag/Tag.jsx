import "./Tag.css"; // style d'une étiquette

// Étiquette d'un logement (ex : "Cozy", "Canal")
export default function Tag(props) {
  return <li className="tag">{props.name}</li>; // envoie le contenu en JSX à React
}