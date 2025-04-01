// Ce composant permet à l'utilisateur de sélectionner un point sur la carte
// En entrée, il prend une prop "positionTrouvee" qui est une fonction permettant de transmettre les coordonnées du point sélectionné au composant parent
// En sortie, il affiche un marqueur à l'emplacement du clic et un popup indiquant "Point sélectionné"

import React, { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet"; // on utilise le hook useMapEvents de React Leaflet
import IconePosition from "../services/IconePosition";

const PointSelectionne = ({ positionTrouvee }) => {
  const [coordonnees, setCoordonnees] = useState(null);

  useMapEvents({
    // pour capturer l'événement de clic sur la carte
    click(e) {
      const { lat, lng } = e.latlng; // on extrait les coordonnées du clic
      console.log("Position sélectionnée :", [lat, lng]);
      setCoordonnees([lat, lng]);
      positionTrouvee([lat, lng]); // on passe la position sélectionnée au parent
    },
  });

  return coordonnees ? (
    <Marker position={coordonnees} icon={IconePosition}>
      <Popup>Point sélectionné</Popup>
    </Marker>
  ) : (
    <p>Cliquez sur la carte pour sélectionner un point !</p>
  );
};

export default PointSelectionne;
