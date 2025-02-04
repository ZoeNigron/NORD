import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './Carte.css';

function Carte ({ children }) {
  return (
    <div className="carte-container">
      <MapContainer
        center={[48.8566, 2.3522]} // coordonnées par défaut : Paris
        zoom={30}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL des "tuiles" pour afficher la carte
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {children}
      </MapContainer>
    </div>
  );
};

export default Carte;
