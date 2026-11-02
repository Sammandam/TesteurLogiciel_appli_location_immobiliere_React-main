import Header from "../Header/Header"; 
import Footer from "../Footer/Footer"; 

// Structure commune à toutes les pages : Header, contenu de la page, Footer
export default function Layout(props) {
  return ( // envoie le contenu en JSX à React
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}