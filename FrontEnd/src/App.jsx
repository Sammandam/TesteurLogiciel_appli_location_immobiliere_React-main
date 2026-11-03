import Layout from "./Composants/Layout/Layout"; // structure commune : Header + page + Footer
import AppRouter from "./Router/AppRouter"; // routeur : choisit la page selon l'adresse

// Composant principal : affiche le routeur à l'intérieur du Layout
export default function App() {
  return ( // envoie le contenu en JSX à React
    <Layout>
      <AppRouter />
    </Layout>
  );
}