// Cette page gère le déroulement de la leçon 2 avec un entraînement, l'activité de mesure de distance, l'estimation et l'analyse de la réponse

import React, { useState } from "react";
import BarreNavig from "../../components/Navigation/BarreNavig";
import Entete from "../../components/Entete/Entete";
import Entrainement2 from "../../components/Entrainement/Entrainement2";
import DistanceLecon2 from "../../components/DistanceLecon/DistanceLecon2";
import FormEstimation from "../../components/FormEstimation/FormEstimation";
import AnalyseEstimation2 from "../../components/AnalyseEstimation/AnalyseEstimation2";
import GestionScore from "../../components/GestionScore";
import "./Lecon2.css";

const Lecon2 = () => {
  const [distance, setDistance] = useState(null);
  const [estimation, setEstimation] = useState("");
  const [resultat, setResultat] = useState(null);
  const [entrainementTermine, setEntrainementTermine] = useState(false);
  const [tentativesReussies, setTentativesReussies] = useState(0);
  const [compteur, setCompteur] = useState(0);

  const gererDistanceCalculee = (nouvelleDistance) => {
    setDistance(nouvelleDistance);
  };

  const gererValidation = () => {
    // on vérifie si l'estimation est correcte et on génère le résultat
    if (distance !== null && estimation !== "") {
      const estimationNumerique = parseFloat(estimation);
      const difference = Math.abs(distance - estimationNumerique);

      const estReussi = difference <= 5; // à 5 mètres près

      setResultat(
        <AnalyseEstimation2
          distance={distance}
          estimation={estimationNumerique}
          compteur={compteur + 1}
          refaireExercice={gererRefaireExercice}
        />
      );

      setCompteur(compteur + 1); // on incrémente le nombre total d'exercices tentés

      if (estReussi) {
        setTentativesReussies((prev) => prev + 1);
      } else {
        setTentativesReussies(0); // on réinitialise le compteur en cas d'échec
      }
    } else {
      alert(
        "Veuillez d'abord calculer la distance, puis entrer votre estimation."
      );
    }
  };

  const gererRefaireExercice = () => {
    // pour recommencer l'exercice
    setEstimation("");
    setResultat(null);
    setDistance(null);
  };

  return (
    <div>
      <Entete />

      <BarreNavig
        title="Leçon 2 : Évaluation des distances sans se déplacer"
        texteAudio="Bienvenue dans la leçon 2. Suivez les étapes pour estimer et analyser une distance sans se déplacer."
      />

      <div>
        {!entrainementTermine ? (
          <Entrainement2 /> // on affiche l'entraînement avant de passer à la leçon
        ) : (
          <>
            <DistanceLecon2
              distanceCalculee={gererDistanceCalculee}
              lorsErreurPosition={(erreur) =>
                console.log("Erreur de position :", erreur)
              }
            />

            {/* on affiche le formulaire d'estimation après le calcul de la distance */}
            {distance !== null && !resultat && (
              <FormEstimation
                estimation={estimation}
                setEstimation={setEstimation}
                gererValidation={gererValidation}
              />
            )}

            {resultat && <div className="resultat">{resultat}</div>}

            <GestionScore tentativesReussies={tentativesReussies} />
            <div>
              <p>{tentativesReussies} réussite(s) d'affilée !</p>
            </div>
          </>
        )}
      </div>

      <div>
        {!entrainementTermine && (
          <button
            className="bouton-lecon-2"
            onClick={() => setEntrainementTermine(true)}
          >
            Passer à la leçon
          </button>
        )}
      </div>
    </div>
  );
};

export default Lecon2;
