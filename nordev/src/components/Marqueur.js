// Marqueur.js
import React from "react";
import { Marker, Popup } from "react-leaflet";

function Marqueur({ position, texte, icon }) {
  return (
    <Marker position={position} icon={icon}>
      <Popup>{texte}</Popup>
    </Marker>
  );
}

export default Marqueur;
