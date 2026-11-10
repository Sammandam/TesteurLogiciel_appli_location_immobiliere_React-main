import "./Host.css"; // style de l'hôte

// Hôte du logement : nom sur deux lignes et photo ronde
export default function Host(props) {
  // Sépare le prénom et le nom, pour les afficher sur deux lignes
  const [firstName, lastName] = props.name.split(" ");

  return ( // envoie le contenu en JSX à React
    <div className="host">
      <p className="host__name">
        {firstName}
        <br />
        {lastName}
      </p>
      <img src={props.picture} alt={props.name} className="host__picture" />
    </div>
  );
}
