import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './Carte.css'; // Assurez-vous d'importer le fichier CSS

const Carte = ({ children }) => {
  return (
    <div className="carte-container">
      <MapContainer
        center={[48.8566, 2.3522]} // Coordonnées par défaut (Paris)
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {children}
      </MapContainer>
    </div>
  );
};

export default Carte;
