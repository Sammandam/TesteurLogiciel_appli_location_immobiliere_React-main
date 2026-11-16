import { useState, useEffect } from "react"; // hooks de React
import { useParams, Navigate } from "react-router"; // lit l'id dans l'adresse, et permet de rediriger

import Slideshow from "../../Composants/Slideshow/Slideshow"; // le carrousel
import Tag from "../../Composants/Tag/Tag"; // une étiquette
import "./Logement.css"; // style de la page Logement
import Host from "../../Composants/Host/Host"; // l'hôte
import Rating from "../../Composants/Rating/Rating"; // la note en étoiles
import Collapse from "../../Composants/Collapse/Collapse"; // le Collapse, réutilisé

// Page d'un logement
export default function Logement() {
  const { id } = useParams(); // l'id du logement, lu dans l'adresse
  const [logement, setLogement] = useState(null); // le logement trouvé (aucun au départ)
  const [isLoading, setIsLoading] = useState(true); // vrai tant que les données arrivent

  // Récupère uniquement le logement qui a cet id
useEffect(() => {
     fetch(`http://localhost:8080/api/properties/${id}`)
    .then((response) => {
      // Si le serveur répond par une erreur (ex : 404), le logement n'existe pas
      if (!response.ok) {
        throw new Error("Logement introuvable");
      }
      return response.json();
    })
    .then((data) => {
      // Sécurité supplémentaire : on vérifie que la réponse est bien un logement
      setLogement(data && data.id ? data : null);
      setIsLoading(false);
    })
    .catch(() => {
      setLogement(null);
      setIsLoading(false);
    });
}, [id]);

  // Pendant le chargement, on n'affiche rien (évite une redirection trop tôt)
  if (isLoading) {
    return null;
  }

  // Si aucun logement n'a cet id, on redirige vers la page d'erreur
  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return ( // envoie le contenu en JSX à React
    <div className="logement">
      <Slideshow pictures={logement.pictures} />

      {/* Informations : titre, lieu et tags à gauche ; hôte à droite */}
      <div className="logement__infos">
        <div className="logement__main">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
          <ul className="logement__tags">
            {logement.tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </ul>
        </div>
        <div className="logement__side">
          <Host name={logement.host.name} picture={logement.host.picture} />
          <Rating rating={logement.rating} />
        </div>
      </div>
      {/* Le Collapse réutilisé : un texte, puis une liste */}
      <div className="logement__collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul className="logement__equipments">
            {logement.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}