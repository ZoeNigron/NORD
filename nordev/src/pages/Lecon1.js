import React, { useState } from "react";
import SelectionExercice from "../components/SelectionExercice/SelectionExercice";
import DistanceLecon1 from "../components/DistanceLecon1";
import AnalyseEstimation from "../components/AnalyseEstimation/AnalyseEstimation";
import exercices from "../services/exercices";

function Lecon1() {
  const [exerciceActif, setExerciceActif] = useState(null); // Aucun exercice actif au départ
  const [distanceParcourue, setDistanceParcourue] = useState(null);

  const handleRetour = () => {
    setExerciceActif(null);          // On revient à la sélection des exercices
    setDistanceParcourue(null);      // On réinitialise la distance parcourue
  };

  return (
    <div>
      {/* Affiche la sélection des exercices si aucun exercice n'est actif */}
      {!exerciceActif ? (
        <SelectionExercice
          exercices={exercices}
          onSelect={setExerciceActif}  // Lors de la sélection, on définit l'exercice actif
        />
      ) : (
        <div>
          <DistanceLecon1
            exercice={exerciceActif}
            onRetour={handleRetour}
            onDistanceCalculee={setDistanceParcourue}
          />

          {distanceParcourue !== null && (
            <AnalyseEstimation
              distance={distanceParcourue}
              estimation={exerciceActif.distanceCible}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Lecon1;
