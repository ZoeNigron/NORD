import React, { useState } from "react";
import { Marker, Popup } from "react-leaflet";
import Carte from "./Carte/Carte";
import PositionUtilisateur from "./PositionUtilisateur";
import CalculDistance from "./CalculDistance/CalculDistance";
import IconePosition from "./IconePosition";
import "./DistanceLecon1.css";

const DistanceLecon1 = ({ exercice, onRetour, onDistanceCalculee }) => {
  const [positionDepart, setPositionDepart] = useState(null);
  const [positionArrivee, setPositionArrivee] = useState(null);
  const [phase, setPhase] = useState(0);

  const handlePositionCapture = (coordonnees) => {
    if (phase === 1) {
      setPositionDepart(coordonnees);
      setPhase(2);
    } else if (phase === 3) {
      setPositionArrivee(coordonnees);
      setPhase(4);
    }
  };

  const handleDistanceCalculee = (distance) => {
    onDistanceCalculee(distance);
  };

  if (!exercice) {
    return (
      <div>
        <h3>Aucun exercice sélectionné.</h3>
        <button onClick={onRetour}>Revenir au menu</button>
      </div>
    );
  }

  return (
    <div className="distance-lecon-container">
      <h3>{exercice.nom}</h3>
      
      {phase === 0 && (
        <div >
          <button className="bouton-container" onClick={() => setPhase(1)}>Démarrer</button>
        </div>
      )}

      {phase === 2 && (
        <div>
          <button className="bouton-container" onClick={() => setPhase(3)}>Terminer</button>
        </div>
      )}

      <Carte>
        {phase === 1 && (
          <PositionUtilisateur positionTrouvee={handlePositionCapture} />
        )}

        {phase === 3 && (
          <PositionUtilisateur positionTrouvee={handlePositionCapture} />
        )}

        {positionDepart && (
          <Marker position={positionDepart} icon={IconePosition}>
            <Popup>Position de départ 📍</Popup>
          </Marker>
        )}

        {positionArrivee && (
          <Marker position={positionArrivee} icon={IconePosition}>
            <Popup>Position d'arrivée 🏁</Popup>
          </Marker>
        )}
      </Carte>

      {positionDepart && positionArrivee && (
        <CalculDistance
          point1={positionDepart}
          point2={positionArrivee}
          setDistance={handleDistanceCalculee}
        />
      )}

      {phase === 4 && (
        <div>
          <button className="bouton-container" onClick={onRetour}>Revenir au menu</button>
        </div>
      )}
    </div>
  );
};

export default DistanceLecon1;
