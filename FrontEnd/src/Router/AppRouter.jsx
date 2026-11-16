import { Routes, Route } from "react-router"; // composants de React Router pour déclarer les routes
import Home from "../Pages/Home/Home";
import APropos from "../Pages/APropos/APropos";
import Logement from "../Pages/Logement/Logement";
import NotFound from "../Pages/NotFound/NotFound";
import { BrowserRouter } from "react-router"; // active la navigation entre les pages
import Layout from "../Composants/Layout/Layout"; // structure commune : Header + page + Footer

  

// Composant principal : associe chaque adresse à une page, à l'intérieur du Layout
export default function AppRouter() {
  return ( // envoie le contenu en JSX à React
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<APropos />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
