// Point d'entrée de l'application : premier fichier exécuté
import { StrictMode } from "react"; // mode de vérification : signale les erreurs pendant le développement
import { createRoot } from "react-dom/client"; // relie React à la page HTML
import { BrowserRouter } from "react-router"; // active la navigation entre les pages
import "./index.css";
import App from "./App.jsx"; // composant principal, qui contient les routes

// Récupère la div "root" de index.html et y affiche l'application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>
);
