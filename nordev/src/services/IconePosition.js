// Ce fichier définit une icône pour les marqueurs Leaflet utilisés sur la carte

import L from "leaflet";

const IconePosition = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png", // URL de l'icône par défaut
  iconSize: [25, 41], // taille de l'icône en pixels (largeur, hauteur)
  iconAnchor: [12, 41], // point d'ancrage de l'icône (où elle est positionnée par rapport aux coordonnées du marqueur)
  popupAnchor: [1, -34], // position où s'affiche le popup par rapport à l'icône
});

export default IconePosition;
