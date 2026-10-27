import { link } from "react-router"; //  composant de lien de React Router
import "./NotFound.css"; // on relie le fichier CSS à ce composant //

export default function NotFound() {
  return ( // renvoie à React le contenu (JSX) à afficher à l'écran
    <main className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__text"> Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="notfound__link"> Retourner sur la page d'accueil</Link>
    </main>
  );
}