// Ce composant utilise la géolocalisation de l'utilisateur pour récupérer sa position actuelle
// En entrée, il prend deux props : "positionTrouvee" (fonction) qui permet de passer la position de l'utilisateur au composant parent
// En sortie, si la position est récupérée avec succès, on l'affiche sous forme de marqueur sur la carte. Sinon, on affiche un message d'erreur

import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import obtenirPositionActuelle from "../services/obtenirPositionActuelle"; // la fonction pour récupérer la position de l'utilisateur
import IconePosition from "../services/IconePosition";
import { LocationOn } from "@mui/icons-material";

function PositionUtilisateur({ positionTrouvee }) {
  const [position, setPosition] = useState(null);
  const map = useMap(); // on utilise le hook useMap pour manipuler la carte

  useEffect(() => {
    obtenirPositionActuelle() // on tente de récupérer la position de l'utilisateur
      .then((coordonnees) => {
        console.log("Position récupérée :", coordonnees);
        setPosition(coordonnees);
        map.setView(coordonnees, 30); // pour centrer la carte sur la position de l'utilisateur
        if (positionTrouvee) {
          positionTrouvee(coordonnees);
        }
      })
      .catch((err) => {
        console.error("Erreur de géolocalisation :", err);
      });
  }, [map, positionTrouvee]); // la position est mise à jour si "map" ou "positionTrouvee" changent

  return position ? (
    <Marker position={position} icon={IconePosition}>
      <Popup>
        Vous êtes ici ! <LocationOn />
      </Popup>
    </Marker>
  ) : null;
}

export default PositionUtilisateur;