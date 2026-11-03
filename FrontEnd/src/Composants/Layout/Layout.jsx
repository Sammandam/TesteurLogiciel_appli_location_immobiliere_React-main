import Header from "../Header/Header"; 
import Footer from "../Footer/Footer"; 
import "./Layout.css";

// Structure commune à toutes les pages : Header, contenu de la page, Footer
export default function Layout(props) {
  return ( // envoie le contenu en JSX à React
    <>
      <Header />
      <main className="main">{props.children}</main>
      <Footer />
    </>
  );
}