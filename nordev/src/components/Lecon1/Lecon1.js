import React, { useState } from "react";
import SelectionExercice from "../SelectionExercice/SelectionExercice";
import Entrainement1 from "../Entrainement/Entrainement1";
import DistanceLecon1 from "../DistanceLecon/DistanceLecon1";
import AnalyseEstimation1 from "../AnalyseEstimation/AnalyseEstimation1";
import exercices from "../../services/donnees/exercices";
import "./Lecon1.css";

function Lecon1() {
  const [exerciceActif, setExerciceActif] = useState(null);
  const [distanceParcourue, setDistanceParcourue] = useState(null);
  const [entrainementTermine, setEntrainementTermine] = useState(false);

  return (
    <div>
      {!entrainementTermine ? (
        <Entrainement1 />
      ) : !exerciceActif ? (
        <SelectionExercice exercices={exercices} onSelect={setExerciceActif} />
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
        </div>
      )}

      {!entrainementTermine && (
        <button className="bouton" onClick={() => setEntrainementTermine(true)}>
          Passer à la leçon
        </button>
      )}
    </div>
  );
}

export default Lecon1;
