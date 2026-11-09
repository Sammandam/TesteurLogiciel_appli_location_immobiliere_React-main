import { useState, useEffect } from "react"; // hooks de React
import { useParams } from "react-router"; // lit l'id dans l'adresse
import NotFound from "../NotFound/NotFound"; // page 404, si le logement n'existe pas
import Slideshow from "../../Composants/Slideshow/Slideshow"; // le carrousel

// Page d'un logement
export default function Logement() {
  const { id } = useParams(); // l'id du logement, lu dans l'adresse
  const [logement, setLogement] = useState(null); // le logement trouvé (aucun au départ)
  const [isLoading, setIsLoading] = useState(true); // vrai tant que les données arrivent

  // Récupère les logements, puis cherche celui qui a le bon id
  useEffect(() => { 
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json()) 
      .then((data) => { 
        const logementTrouve = data.find((item) => item.id === id); 
        setLogement(logementTrouve); 
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erreur de chargement :", error);
        setIsLoading(false);
      });
  }, [id]);

  // Pendant le chargement, on n'affiche rien
  if (isLoading) {
    return null;
  }

  // Si aucun logement n'a cet id, on affiche la page 404
  if (!logement) {
    return <NotFound />;
  }

  return ( // envoie le contenu en JSX à React
    <div className="logement">
      <Slideshow pictures={logement.pictures} /> 
      <h1>{logement.title}</h1>
    </div>
  );
}