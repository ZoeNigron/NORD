import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import obtenirPositionActuelle from "../services/obtenirPositionActuelle";
import IconePosition from "./IconePosition";

function PositionUtilisateur({ positionTrouvee }) {
  // prop qui permet à un composant parent de recevoir la position de l'utilisateur
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const map = useMap();

  useEffect(() => {
    obtenirPositionActuelle()
      .then((coordonnees) => {
        console.log("Position récupérée :", coordonnees); 
        setPosition(coordonnees);
        map.setView(coordonnees, 30); // pour centrer la carte sur les coordonnées
        if (positionTrouvee) {
          positionTrouvee(coordonnees);
        }
      })
      .catch((err) => {
        setError(
          "Impossible de récupérer la position de l'utilisateur. Veuillez vérifier les paramètres de géolocalisation."
        );
        console.error(err);
      });
  }, [map, positionTrouvee]); // récupération de la position sera tentée si map ou positionTrouvee change

  if (error) {
    return <p>{error}</p>;
  }

  return position ? (
    <Marker position={position} icon={IconePosition}>
      <Popup>Vous êtes ici ! 📍</Popup>
    </Marker>
  ) : null;
}

export default PositionUtilisateur;

// faire un composant affichagedumarqueur