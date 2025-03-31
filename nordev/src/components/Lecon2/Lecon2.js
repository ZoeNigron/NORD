import React, { useState } from "react";
import Entrainement2 from "../Entrainement/Entrainement2";
import DistanceLecon2 from "../DistanceLecon/DistanceLecon2";
import FormEstimation from "../FormEstimation/FormEstimation";
import AnalyseEstimation2 from "../AnalyseEstimation/AnalyseEstimation2";
import GestionScore from "../GestionScore";
import "./Lecon2.css";

const Lecon2 = () => {
  const [distance, setDistance] = useState(null);
  const [estimation, setEstimation] = useState("");
  const [resultat, setResultat] = useState(null);
  const [entrainementTermine, setEntrainementTermine] = useState(false);
  const [tentativesReussies, setTentativesReussies] = useState(0);
  const [compteur, setCompteur] = useState(0); // Compteur total

  const gererDistanceCalculee = (nouvelleDistance) => {
    setDistance(nouvelleDistance);
  };

  const gererValidation = () => {
    if (distance !== null && estimation !== "") {
      const estimationNumerique = parseFloat(estimation);
      const difference = Math.abs(distance - estimationNumerique);

      // Vérifie si l'estimation est correcte (à 5m près)
      const estReussi = difference <= 5;

      setResultat(
        <AnalyseEstimation2
          distance={distance}
          estimation={estimationNumerique}
          compteur={compteur + 1}
          onRefaireExercice={gererRefaireExercice}
        />
      );

      setCompteur(compteur + 1); // Incrémente le compteur total

      if (estReussi) {
        setTentativesReussies((prev) => prev + 1);
      } else {
        setTentativesReussies(0); // Réinitialise si l'utilisateur échoue
      }
    } else {
      alert(
        "Veuillez d'abord calculer la distance, puis entrer votre estimation."
      );
    }
  };

  const gererRefaireExercice = () => {
    setEstimation("");
    setResultat(null);
    setDistance(null);
  };

  return (
    <div>
      {!entrainementTermine ? (
        <Entrainement2 />
      ) : (
        <>
          <DistanceLecon2 distanceCalculee={gererDistanceCalculee} />

          {distance !== null && !resultat && (
            <FormEstimation
              estimation={estimation}
              setEstimation={setEstimation}
              gererValidation={gererValidation}
            />
          )}

          {resultat && <div className="resultat">{resultat}</div>}
          <GestionScore tentativesReussies={tentativesReussies} />
          <div className="reussite">
            <p> {tentativesReussies} réussite(s) d'affilée !</p>
          </div>
        </>
      )}

      {!entrainementTermine && (
        <button className="bouton" onClick={() => setEntrainementTermine(true)}>
          Passer à la leçon
        </button>
      )}
    </div>
  );
};

export default Lecon2;
