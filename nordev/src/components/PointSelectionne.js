import React, { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import IconePosition from "./IconePosition";

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
      <Popup>
        Coordonnées sélectionnées: {coordonnees[0]}, {coordonnees[1]}
      </Popup>
    </Marker>
  ) : (
    <p>Cliquez sur la carte pour sélectionner un point !</p>
  );
};

export default PointSelectionne;
