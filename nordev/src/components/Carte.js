import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import blueIcon from "./Icone"; // Import de l'icône personnalisée
import Marqueur from "./Marqueur"; // Import du composant Marqueur

function Carte({ startCoords }) {
  // Ne pas rendre la carte tant que startCoords n'est pas défini
  if (!startCoords) {
    return <p>Chargement de la carte...</p>;
  }

  return (
    <MapContainer
      center={{ lat: startCoords.latitude, lng: startCoords.longitude }}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Afficher le marqueur uniquement si les coordonnées existent */}
      <Marqueur
        position={[startCoords.latitude, startCoords.longitude]}
        texte="Position actuelle"
        icon={blueIcon}
      />
    </MapContainer>
  );
}

export default Carte;
