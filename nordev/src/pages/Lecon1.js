import React, { useState } from "react";
import SelectionExercice from "../components/SelectionExercice/SelectionExercice";
import DistanceLecon1 from "../components/DistanceLecon1";
import AnalyseEstimation1 from "../components/AnalyseEstimation/AnalyseEstimation1";
import exercices from "../services/donnees/exercices";
import "./Lecon1.css";

function Lecon1() {
  const [exerciceActif, setExerciceActif] = useState(null);
  const [distanceParcourue, setDistanceParcourue] = useState(null);

  const handleRetour = () => {
    setExerciceActif(null);        
    setDistanceParcourue(null);
  };

  return (
    <div>
      {!exerciceActif ? (
        <SelectionExercice
          exercices={exercices}
          onSelect={setExerciceActif}
        />
      ) : (
        <div>
          <DistanceLecon1
            exercice={exerciceActif}
            onDistanceCalculee={setDistanceParcourue}
          />
          
          {distanceParcourue !== null && (
            <AnalyseEstimation1
              distance={distanceParcourue}
              estimation={exerciceActif.distanceCible}
            />
          )}

          <button onClick={handleRetour} className="bouton-container">
            Revenir au menu
          </button>
        </div>
      )}
    </div>
  );
}

export default Lecon1;
