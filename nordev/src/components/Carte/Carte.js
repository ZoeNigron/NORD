// Ce composant permet d'afficher une carte interactive en utilisant React-Leaflet et OpenStreetMap
// En entrée, il prend une prop "contenu" qui permet d'ajouter des marqueurs sur la carte via l'appel des autres composants
// En sortie, il retourne un composant MapContainer qui affiche la carte

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // on importe les styles nécessaires pour la carte
import "./Carte.css";

function Carte({ contenu }) {
  return (
    <div className="carte">
      <MapContainer
        center={[48.8566, 2.3522]} // position initiale de la carte : Paris
        zoom={30} // niveau de zoom initial
        style={{ height: "100%", width: "100%" }} // pour s'assurer que la carte occupe toute la taille disponible dans le conteneur
      >
        {/* on utilise TileLayer pour définir les tuiles de la carte */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL pour récupérer les tuiles de la carte depuis OpenStreetMap
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // on attribue les données cartographiques à OpenStreetMap
        />
        {contenu}
      </MapContainer>
    </div>
  );
}

export default Carte;
