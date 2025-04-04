// Cette page gère le déroulement de la leçon 2 avec un entraînement, l'activité de mesure de distance, l'estimation et l'analyse de la réponse

import React, { useState, useEffect } from "react";
import BarreNavig from "../../components/BarreNavig/BarreNavig";
import Entete from "../../components/Entete/Entete";
import Entrainement from "../../components/Entrainement/Entrainement";
import DistanceLecon2 from "../../components/DistanceLecon/DistanceLecon2";
import FormEstimation from "../../components/FormEstimation/FormEstimation";
import AnalyseEstimation from "../../components/AnalyseEstimation/AnalyseEstimation";
import { obtenirLecon } from "../../services/api";
import "./Lecon2.css";

const Lecon2 = () => {
  const [lecon, setLecon] = useState(null);
  const [distance, setDistance] = useState(null);
  const [estimation, setEstimation] = useState("");
  const [resultat, setResultat] = useState(null);
  const [entrainementTermine, setEntrainementTermine] = useState(false);
  const [tentativesReussies, setTentativesReussies] = useState(0);

  useEffect(() => {
    const fetchLecons = async () => {
      try {
        const donneesLecon = await obtenirLecon(2);
        setLecon(donneesLecon);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };
    fetchLecons();
  }, []);

  const gererDistanceCalculee = (nouvelleDistance) => {
    setDistance(nouvelleDistance);
  };

  const gererValidation = () => {
    // on vérifie si l'estimation est correcte et on génère le résultat
    if (distance !== null && estimation !== "") {
      const estimationNumerique = parseFloat(estimation);
      const difference = Math.abs(distance - estimationNumerique);
  
      const estReussi = difference <= 5; // à 5 mètres près
  
      if (estReussi) {
        setTentativesReussies((prev) => prev + 1); // On incrémente les tentatives réussies
      } else {
        setTentativesReussies(0); // On réinitialise le compteur en cas d'échec
      }
  
      // Passer directement la nouvelle valeur de tentativesReussies
      setResultat(
        <AnalyseEstimation
          distance={distance}
          estimation={estimationNumerique}
          refaireExercice={gererRefaireExercice}
          leconId={2}
          tentativesReussies={tentativesReussies + (estReussi ? 1 : 0)} // Passe la valeur mise à jour ici
        />
      );
    } else {
      alert(
        "Veuillez d'abord calculer la distance, puis entrer votre estimation."
      );
    }
  };
  
  const gererRefaireExercice = () => { // pour recommencer l'exercice
    setEstimation("");
    setResultat(null);
    setDistance(null);
  };

  return (
    <div>
      <Entete />

      <BarreNavig
        titre="Leçon 2 : Évaluation des distances sans se déplacer"
        texteAudio="Bienvenue dans la leçon 2. Suivez les étapes pour estimer et analyser une distance sans se déplacer."
      />

      <div>
        {!entrainementTermine ? (
          <Entrainement leconId={2} /> // on affiche l'entraînement avant de passer à la leçon
        ) : (
          <>
            {lecon && (
              <div className="objectif-lecon-2">
                <h3>Objectif de la leçon</h3>
                <p>{lecon.objectif}</p>
              </div>
            )}

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
                miseAJourEstimation={setEstimation}
                gererValidation={gererValidation}
              />
            )}

            {resultat && <div className="resultat-lecon-2">{resultat}</div>}
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
