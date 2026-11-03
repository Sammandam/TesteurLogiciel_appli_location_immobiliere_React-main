import Banner from "../../Composants/Banner/Banner"; // le composant bannière
import imageAccueil from "../../assets/Banner/banner-accueil.png"; // l'image des falaises

export default function Home () {
    return (
        <div className="home">
            <Banner image={imageAccueil} /> // il utilise le composant banner avec l'image des falaises
        </div>
    );
}
