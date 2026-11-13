import Banner from "../../Composants/Banner/Banner"; // le composant bannière
import Card from "../../Composants/Card/Card"; // le composant carte
import imageAccueil from "../../assets/Banner/banner-accueil.png"; // l'image des falaises
import { useState, useEffect } from "react"; // hooks de React
import "./Home.css";


// Page d'accueil : bannière et galerie des logements
export default function Home() {
  // Liste des logements, vide au départ
  const [logements, setLogements] = useState([]);
  

  // Récupère les logements depuis le backend, une seule fois au chargement
  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json()) // transforme la réponse en données JavaScript
      .then((data) => setLogements(data)) // enregistre les logements
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []); // le tableau vide [] signifie que l'effet ne se déclenche qu'une seule fois, au montage du composant

  return ( // envoie le contenu en JSX à React
    <div className="home">
      <Banner image={imageAccueil} titre="Chez vous, partout et ailleurs" alt="Falaises au bord de la mer" />
      <section className="home__gallery">
        {/* Une carte par logement */}
        {logements.map((logement) => ( // parcourt la liste des logments et créé une carte pour chacun
          <Card
            key={logement.id} // clé unique pour chaque carte
            id={logement.id} 
            title={logement.title} 
            cover={logement.cover} 
          /> 
        ))}
      </section>
    </div>
  );
} 