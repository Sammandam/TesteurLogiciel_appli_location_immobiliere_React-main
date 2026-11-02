import Banner from "../../Composants/Banner/Banner"; // le composant bannière
import imageAPropos from "../../assets/Banner/banner-apropos.png"; // l'image des montagnes

// Page À propos
export default function APropos() {
  return ( // envoie le contenu en JSX à React
    <div className="apropos">
      <Banner image={imageAPropos} />
    </div>
  );
}
