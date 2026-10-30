

// Bannière  : reçoit une image et un titre 
export default function Banner(props) {
  return ( 
    <section className="banner">
      <img src={props.image} alt="" className="banner__image" />
      {props.titre && <h1 className="banner__title">{props.titre}</h1>} 
        {/* Affiche le titre seulement s'il est transmis par la page */}
    </section>
  );
}
