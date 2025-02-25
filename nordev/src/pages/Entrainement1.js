/*import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import Carte from "./Carte/Carte";
import IconePosition from "./IconePosition";
import PositionUtilisateur from "./PositionUtilisateur";
import SuiviPosition from "./SuiviPosition";

const Entrainement1 = () => {
  const [positions, setPositions] = useState([]);
  const [distanceParcourue, setDistanceParcourue] = useState(0);
  const distanceCible = 20;
  const [positionActuelle, setPositionActuelle] = useState(null);

  useEffect(() => {
    if (distanceParcourue >= distanceCible) {
      alert("Vous venez de parcourir 20 mètres !");
    }
  }, [distanceParcourue]);

  return (
    <div>
      <h3>Entraînement - Marchez sur 20 mètres !</h3>
      <p>Distance parcourue : {distanceParcourue.toFixed(2)} m</p>
      <Carte>
        <PositionUtilisateur positionTrouvee={(pos) => setPositions((prev) => [...prev, pos])} />
        
        {positionActuelle && (
          <Marker key="positionActuelle" position={positionActuelle} icon={IconePosition}>
            <Popup>Position actuelle 📍</Popup>
          </Marker>
        )}
        
        {positions.map((pos, index) => (
          <Marker key={index} position={pos} icon={IconePosition}>
            <Popup>{index === 0 ? "Départ 📍" : `Point ${index + 1}`}</Popup>
          </Marker>
        ))}
        
        <SuiviPosition setPosition={setPositionActuelle} />
      </Carte>
    </div>
  );
};

export default Entrainement1;*/
