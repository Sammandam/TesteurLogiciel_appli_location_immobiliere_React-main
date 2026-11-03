import { Routes, Route } from "react-router"; // composants de React Router pour déclarer les routes
import Home from "../Pages/Home/Home";
import APropos from "../Pages/APropos/APropos";
import Logement from "../Pages/Logement/Logement";
import NotFound from "../Pages/NotFound/NotFound";
  

// Composant principal : associe chaque adresse à une page, à l'intérieur du Layout
export default function AppRouter() {
  return ( // envoie le contenu en JSX à React
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<APropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}