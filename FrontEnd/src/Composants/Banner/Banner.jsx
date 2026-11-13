import "./Banner.css"; // style de la bannière

// Bannière réutilisable : reçoit une image, un texte alternatif et un titre (facultatifs)
export default function Banner(props) {
  return ( // envoie le contenu en JSX à React
    <section className="banner">
      {/* L'image utilise le texte alternatif transmis, ou un alt vide s'il n'y en a pas */}
      <img src={props.image} alt={props.alt || ""} className="banner__image" />
      {/* Affiche le titre seulement s'il est transmis par la page */}
      {props.titre && <h1 className="banner__title">{props.titre}</h1>}
    </section>
  );
}