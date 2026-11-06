import Banner from "../../Composants/Banner/Banner"; // le composant bannière
import imageAPropos from "../../assets/Banner/banner-apropos.png"; // l'image des montagnes
import Collapse from "../../Composants/Collapse/Collapse"; // le composant Collapse
import aPropos from "../../Data/aPropos"; // les titres et textes des Collapse
import "./APropos.css"; // style de la page À propos

// Page À propos : bannière et 4 Collapse
export default function APropos() {
  return ( // envoie le contenu en JSX à React
    <div className="apropos">
      <Banner image={imageAPropos} />
      <div className="apropos__list">
        {/* Un Collapse par élément du fichier de données */}
        {aPropos.map((item) => (// 
          <Collapse key={item.id} title={item.title}>
            <p>{item.info}</p> 
          </Collapse>
        ))}
      </div>
    </div> 
  );
}
