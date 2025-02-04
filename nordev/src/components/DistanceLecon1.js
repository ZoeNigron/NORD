import React, { useState } from "react";
import { Marker, Popup } from "react-leaflet"; // ✅ Import des composants Leaflet
import Carte from "./Carte/Carte";
import PositionUtilisateur from "./PositionUtilisateur";
import BoutonAction from "./BoutonAction/BoutonAction";
import CalculDistance from "./CalculDistance/CalculDistance";
import IconePosition from "./IconePosition"; // ✅ Icône personnalisée
import "./DistanceLecon1.css";

const DistanceLecon1 = ({ exercice, onRetour, onDistanceCalculee }) => {
  const [positionDepart, setPositionDepart] = useState(null);
  const [positionArrivee, setPositionArrivee] = useState(null);
  const [phase, setPhase] = useState("ready");

  const handlePositionCapture = (coordonnees) => {
    if (phase === "start") {
      setPositionDepart(coordonnees);
      setPhase("move");
    } else if (phase === "end") {
      setPositionArrivee(coordonnees);
      setPhase("done");
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
      <Carte>
        {phase === "ready" && (
          <div className="bouton-action-container">
            <BoutonAction texte="Démarrer" onClick={() => setPhase("start")} />
          </div>
        )}

        {phase === "start" && (
          <PositionUtilisateur positionTrouvee={handlePositionCapture} />
        )}

        {phase === "move" && (
          <>
            <p>Déplacez-vous puis cliquez sur "Terminer".</p>
            <div className="bouton-action-container">
              <BoutonAction texte="Terminer" onClick={() => setPhase("end")} />
            </div>
          </>
        )}

        {phase === "end" && (
          <PositionUtilisateur positionTrouvee={handlePositionCapture} />
        )}

        {/* ✅ Affichage des marqueurs */}
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

      {phase === "done" && (
        <button onClick={onRetour}>Revenir au menu</button>
      )}
    </div>
  );
};

export default DistanceLecon1;
