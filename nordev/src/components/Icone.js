// blueIcon.js (Fichier séparé pour l'icône)
import L from "leaflet";

// Icône personnalisée pour le marqueur
const blueIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41], // Taille de l'icône
  iconAnchor: [12, 41], // Ancrage de l'icône sur le marqueur
  popupAnchor: [1, -34], // Position du popup par rapport à l'icône
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41], // Taille de l'ombre
  shadowAnchor: [12, 41], // Position de l'ombre
});

export default blueIcon;
