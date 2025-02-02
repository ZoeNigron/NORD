// PointSelectionne.js

import React, { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import IconePosition from "./IconePosition";

const PointSelectionne = ({ onPositionFound }) => {
  const [coords, setCoords] = useState(null);

  // Utilisation de useMapEvents pour capturer l'événement de clic sur la carte
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng; // Extraire les coordonnées du clic
      setCoords([lat, lng]); // Mettre à jour l'état avec les coordonnées cliquées
      onPositionFound([lat, lng]); // Passer la position sélectionnée au parent
    }
  });

  return coords ? (
    <Marker position={coords} icon={IconePosition}>
      <Popup>
        Coordonnées sélectionnées: {coords[0]}, {coords[1]}
      </Popup>
    </Marker>
  ) : (
    <p>Cliquez sur la carte pour sélectionner un point !</p>
  );
};

export default PointSelectionne;
