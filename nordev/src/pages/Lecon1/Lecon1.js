// Cette page gère le déroulement de la leçon 1 avec un entraînement, l'activité de mesure de distance, l'estimation et l'analyse de la réponse

import React, { useState, useEffect } from "react";
import BarreNavig from "../../components/BarreNavig/BarreNavig";
import Entete from "../../components/Entete/Entete";
import SelectionExercice from "../../components/SelectionExercice/SelectionExercice";
import Entrainement from "../../components/Entrainement/Entrainement";
import DistanceLecon1 from "../../components/DistanceLecon/DistanceLecon1";
import AnalyseEstimation from "../../components/AnalyseEstimation/AnalyseEstimation";
import { obtenirExercices, obtenirLecon } from "../../services/api";
import "./Lecon1.css";

const Lecon1 = () => {
  const [lecon, setLecon] = useState(null);
  const [exercices, setExercices] = useState([]);
  const [exerciceActif, setExerciceActif] = useState(null);
  const [distanceParcourue, setDistanceParcourue] = useState(null);
  const [entrainementTermine, setEntrainementTermine] = useState(false);
  const [tentativesReussies, setTentativesReussies] = useState(0);

  useEffect(() => {
    const fetchDonnees = async () => { // on appelle les données de la leçon et des exercices depuis l'API
      try {
        const donneesLecon = await obtenirLecon(1); // on s'intéresse à la leçon dont l'id est 1
        const donneesExercices = await obtenirExercices(); // on récupère les données des exercices qui composent la leçon 1
        setLecon(donneesLecon);
        setExercices(donneesExercices);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };

    fetchDonnees();
  }, []);

  const gererDistanceCalculee = (distance) => {
    setDistanceParcourue(distance); // on met à jour la distance parcourue après la mesure
  };

  const gererRefaireExercice = () => { // pour recommencer un exercice
    setDistanceParcourue(null);
    setExerciceActif(null);
  };

  useEffect(() => {
    if (distanceParcourue !== null && exerciceActif) { // on analyse le résultat en comparant la distance mesurée à la distance cible
      const difference = Math.abs(
        distanceParcourue - exerciceActif.distanceCible
      );
      const estReussi = difference <= 5; // on laisse la marge d'erreur de 5 mètres

      if (estReussi) {
        setTentativesReussies((pre) => pre + 1);
      } else {
        setTentativesReussies(0);
      }
    }
  }, [distanceParcourue, exerciceActif]);

  return (
    <div>
      <Entete />
      <BarreNavig
        titre="Leçon 1 : Évaluation des distances en se déplaçant"
        texteAudio="Bienvenue dans la leçon 1. Suivez les étapes pour estimer et analyser une distance en se déplaçant."
      />

      <div>
        {!entrainementTermine ? (
          <Entrainement leconId={1} />
        ) : !exerciceActif ? (
          <SelectionExercice
            exercices={exercices}
            lorsSelection={setExerciceActif}
          />
        ) : (
          <div>
            {lecon && (
              <div className="objectif-lecon-1">
                <h3>Objectif de la leçon</h3>
                <p>{lecon.objectif}</p>
              </div>
            )}

            <DistanceLecon1
              exercice={exerciceActif}
              lorsDistanceCalculee={gererDistanceCalculee}
            />

            {distanceParcourue !== null && (
              <>
                <AnalyseEstimation
                  distance={distanceParcourue}
                  estimation={exerciceActif.distanceCible}
                  refaireExercice={gererRefaireExercice}
                  leconId={1} // on est sur la leçon 1
                  tentativesReussies={tentativesReussies}
                />
              </>
            )}
          </div>
        )}
      </div>

      {!entrainementTermine && (
        <button
          className="bouton-lecon-1"
          onClick={() => setEntrainementTermine(true)} // pour passer de l'entraînement à la leçon
        >
          Passer à la leçon
        </button>
      )}
    </div>
  );
};

export default Lecon1;
