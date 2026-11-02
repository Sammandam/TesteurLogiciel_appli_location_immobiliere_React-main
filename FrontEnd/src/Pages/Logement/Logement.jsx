import { useParams } from "react-router"; // permet de lire une partie variable de l'adresse


export default function Logement() {
  const { id } = useParams(); // récupère l'identifiant du logement dans l'adresse
  return ( 
    <div className="logement">
      <h1>Logement {id}</h1>
    </div>
  );
}