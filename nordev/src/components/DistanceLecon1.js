import React, { useState } from "react";
import Carte from "./Carte/Carte";
import PositionUtilisateur from "./PositionUtilisateur";
import CalculDistance from "./CalculDistance/CalculDistance";
import BoutonAction from "./BoutonAction/BoutonAction";
import AnalyseEstimation from "./AnalyseEstimation/AnalyseEstimation";

const exercices = [
  { id: 1, nom: "Exercice 20m", distanceCible: 20 },
  { id: 2, nom: "Exercice 50m", distanceCible: 50 },
  { id: 3, nom: "Exercice 100m", distanceCible: 100 }
];

const DistanceLecon1 = () => {
  const [exerciceActif, setExerciceActif] = useState(null);
  const [positionDepart, setPositionDepart] = useState(null);
  const [positionArrivee, setPositionArrivee] = useState(null);
  const [phase, setPhase] = useState("selection");
  const [distanceParcourue, setDistanceParcourue] = useState(null);

  const handleLeconSelect = (lecon) => {
    setExerciceActif(lecon);
    setPhase("start");
  };

  const handlePositionTrouvee = (coordonnees) => {
    if (phase === "start") {
      setPositionDepart(coordonnees);
      console.log("Position de départ:", coordonnees);
      setPhase("end");
    } else if (phase === "end") {
      setPositionArrivee(coordonnees);
      console.log("Position d'arrivée:", coordonnees);
      setPhase("done");
    }
  };

  return (
    <div>
      {phase === "selection" && (
        <div>
          <h2>Choisissez un exercice :</h2>
          {exercices.map((lecon) => (
            <button key={lecon.id} onClick={() => handleLeconSelect(lecon)}>
              {lecon.nom}
            </button>
          ))}
        </div>
      )}

      {exerciceActif && (
        <div>
          <h3>{exerciceActif.nom}</h3>
          <Carte>
            <BoutonAction
              texte={phase === "start" ? "Démarrer" : "Terminer"}
              onClick={() => {
                setPhase(phase === "start" ? "end" : "done");
              }}
            />

            {(phase === "start" || phase === "end") && (
              <PositionUtilisateur positionTrouvee={handlePositionTrouvee} />
            )}
          </Carte>

          {positionDepart && positionArrivee && (
            <CalculDistance
              point1={positionDepart}
              point2={positionArrivee}
              onDistanceCalculee={(distance) => setDistanceParcourue(distance)}
            />
          )}

          {phase === "done" && distanceParcourue !== null && (
            <AnalyseEstimation
              distance={distanceParcourue}
              estimation={exerciceActif.distanceCible}
            />
          )}

          {phase === "done" && (
            <button onClick={() => {
              setExerciceActif(null);
              setPositionDepart(null);
              setPositionArrivee(null);
              setDistanceParcourue(null);
              setPhase("selection");
            }}>
              Revenir au menu
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DistanceLecon1;
