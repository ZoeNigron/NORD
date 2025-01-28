import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import blueIcon from "./Icone"; // Icône personnalisée
import Marqueur from "./Marqueur"; // Composant Marqueur
import "./Carte.css"; // Import des styles CSS

function Carte({ startCoords, fullscreen = false }) {
  // Vérification si les coordonnées sont disponibles
  if (!startCoords) {
    return <p className="carte-loading">Chargement de la carte...</p>;
  }

  return (
    <div className={`carte-container ${fullscreen ? "fullscreen" : ""}`}>
      <MapContainer
        center={[startCoords.latitude, startCoords.longitude]}
        zoom={13}
        style={{ height: "100%", width: "100%" }} // S'assure que la carte occupe tout le conteneur
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {/* Marqueur pour la position actuelle */}
        <Marqueur
          position={[startCoords.latitude, startCoords.longitude]}
          texte="Position actuelle"
          icon={blueIcon}
        />
      </MapContainer>
    </div>
  );
}

export default Carte;
