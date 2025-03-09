import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import { LocationOn, Flag } from "@mui/icons-material";
import Carte from "../Carte/Carte";
import PositionUtilisateur from "../PositionUtilisateur";
import CalculDistance from "../CalculDistance/CalculDistance";
import IconePosition from "../IconePosition";
import "./DistanceLecon.css";

const DistanceLecon1 = ({ exercice, onDistanceCalculee, onErreurPosition }) => {
  const [positionDepart, setPositionDepart] = useState(null);
  const [positionArrivee, setPositionArrivee] = useState(null);
  const [phase, setPhase] = useState(0);
  const [erreurPosition, setErreurPosition] = useState(null);

  const gererPositionCapturee = (coordonnees) => {
    if (phase === 1) {
      setPositionDepart(coordonnees);
      setPhase(2);
      setErreurPosition(null);
    } else if (phase === 3) {
      setPositionArrivee(coordonnees);
      setPhase(4);
      setErreurPosition(null);
    }
  };

  const gererErreurPosition = (erreur) => {
    setErreurPosition(
      "Impossible de récupérer votre position. Veuillez vérifier vos paramètres de localisation."
    );
    if (onErreurPosition) {
      onErreurPosition(erreur);
    }
  };

  const gererDistanceCalculee = (distance) => {
    onDistanceCalculee(distance);
  };

  useEffect(() => {
    let timer;
    if (phase === 1) {
      timer = setTimeout(() => {
        setErreurPosition(
          "Impossible de récupérer votre position. Veuillez vérifier vos paramètres de localisation."
        );
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [phase]);

  if (!exercice) {
    return <h3>Aucun exercice sélectionné.</h3>;
  }

  return (
    <div className="distance-lecon-container">
      <h3>{exercice.nom}</h3>

      {erreurPosition && <div className="erreur-position">{erreurPosition}</div>}

      {phase === 0 && (
        <div>
          <button className="bouton" onClick={() => setPhase(1)}>
            Démarrer
          </button>
        </div>
      )}

      {phase === 2 && (
        <div>
          <button className="bouton" onClick={() => setPhase(3)}>
            Terminer
          </button>
        </div>
      )}

      <Carte>
        {phase === 1 && (
          <PositionUtilisateur
            positionTrouvee={gererPositionCapturee}
            onErreur={gererErreurPosition}
          />
        )}

        {phase === 3 && (
          <PositionUtilisateur
            positionTrouvee={gererPositionCapturee}
            onErreur={gererErreurPosition}
          />
        )}

        {positionDepart && (
          <Marker position={positionDepart} icon={IconePosition}>
            <Popup>
              <LocationOn /> Position de départ
            </Popup>
          </Marker>
        )}

        {positionArrivee && (
          <Marker position={positionArrivee} icon={IconePosition}>
            <Popup>
              <Flag /> Position d'arrivée
            </Popup>
          </Marker>
        )}
      </Carte>

      {positionDepart && positionArrivee && (
        <CalculDistance
          point1={positionDepart}
          point2={positionArrivee}
          setDistance={gererDistanceCalculee}
        />
      )}
    </div>
  );
};

export default DistanceLecon1;
