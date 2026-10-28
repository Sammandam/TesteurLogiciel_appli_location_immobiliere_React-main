import { Routes, Route } from "react-router"; // composants de React Router pour déclarer les routes
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

export default function App() {
  return ( // envoie le contenu en JSX à React
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}