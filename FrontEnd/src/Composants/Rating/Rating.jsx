import "./Rating.css"; // style des étoiles

// Note du logement : 5 étoiles, colorées selon la note
export default function Rating(props) {
  const rating = Number(props.rating); // la note arrive en texte ("4") : on la convertit en nombre
  const stars = [1, 2, 3, 4, 5]; // les 5 étoiles à afficher

  return ( // envoie le contenu en JSX à React
    <div className="rating" aria-label={`Note : ${rating} sur 5`}> 
      {stars.map((star) => ( // pour chaque étoile, on affiche un span avec la classe "active" si elle est colorée
        <span
          key={star} // clé unique pour chaque étoile
          className={star <= rating ? "rating__star rating__star--active" : "rating__star"} // si l'étoile est colorée ou pas
        >
          ★
        </span>
      ))}
    </div>
  );
}