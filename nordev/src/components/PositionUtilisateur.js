import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import obtenirPositionActuelle from "../services/obtenirPositionActuelle";
import IconePosition from "./IconePosition";

const PositionUtilisateur = ({ onPositionFound }) => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null); // Gérer l'erreur
  const map = useMap();

  useEffect(() => {
    obtenirPositionActuelle()
      .then((coords) => {
        setPosition(coords);
        map.setView(coords, 13); // Centre la carte sur la position
        if (onPositionFound) {
          onPositionFound(coords); // Partage la position avec le parent
        }
      })
      .catch((err) => {
        setError("Impossible de récupérer la position de l'utilisateur. Veuillez vérifier les paramètres de géolocalisation.");
        console.error(err);
      });
  }, [map, onPositionFound]);

  if (error) {
    return <p>{error}</p>; // Affiche le message d'erreur
  }

  return position ? (
    <Marker position={position} icon={IconePosition}>
      <Popup>Vous êtes ici ! 📍</Popup>
    </Marker>
  ) : null;
};

export default PositionUtilisateur;
