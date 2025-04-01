// Cette page gère le déroulement de la leçon 1 avec l'entraînement, la sélection d'un exercice parmi la liste récupérée depuis l'API, l'activité de mesure de distance et enfin l'analyse de l'estimation de distance

import React, { useState, useEffect } from "react";
import BarreNavig from "../../components/Navigation/BarreNavig";
import Entete from "../../components/Entete/Entete";
import SelectionExercice from "../../components/SelectionExercice/SelectionExercice";
import Entrainement1 from "../../components/Entrainement/Entrainement1";
import DistanceLecon1 from "../../components/DistanceLecon/DistanceLecon1";
import AnalyseEstimation1 from "../../components/AnalyseEstimation/AnalyseEstimation1";
import { obtenirExercices } from "../../api";
import "./Lecon1.css";

const Lecon1 = () => {
  const [exercices, setExercices] = useState([]);
  const [exerciceActif, setExerciceActif] = useState(null);
  const [distanceParcourue, setDistanceParcourue] = useState(null);
  const [entrainementTermine, setEntrainementTermine] = useState(false);

  useEffect(() => {
    const fetchExercices = async () => {
      const data = await obtenirExercices(); // on utilise la fonction pour récupérer la liste des exercices depuis l'API
      setExercices(data);
    };

    fetchExercices();
  }, []);

  return (
    <div>
      <Entete />

      <BarreNavig
        title="Leçon 1 : Évaluation des distances en se déplaçant"
        texteAudio="Bienvenue dans la leçon 1. Suivez les étapes pour estimer et analyser une distance en se déplaçant."
      />

      <div>
        {!entrainementTermine ? (
          <Entrainement1 /> // pour appeler l'entraînement avant de passer à la leçon
        ) : !exerciceActif ? (
          <SelectionExercice exercices={exercices} onSelect={setExerciceActif} /> // pour sélectionner un exercice
        ) : (
          <div>
            <DistanceLecon1
              exercice={exerciceActif}
              lorsDistanceCalculee={setDistanceParcourue}
              lorsErreurPosition={(erreur) =>
                console.log("Erreur de position :", erreur)
              }
            />

            {distanceParcourue !== null && (
              <AnalyseEstimation1
                distance={distanceParcourue}
                estimation={exerciceActif.distanceCible}
              />
            )}
          </div>
        )}
      </div>

      <div>
        {!entrainementTermine && (
          <button className="bouton-lecon-1" onClick={() => setEntrainementTermine(true)}>
            Passer à la leçon
          </button>
        )}
      </div>
    </div>
  );
};

export default Lecon1;
