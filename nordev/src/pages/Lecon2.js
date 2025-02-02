import React, { useState } from "react";
import DistanceLecon2 from "../components/DistanceLecon2";
import FormEstimation from "../components/FormEstimation";
import AnalyseEstimation from "../components/AnalyseEstimation";

const Lecon2 = () => {
  const [distance, setDistance] = useState(null);
  const [estimation, setEstimation] = useState("");
  const [resultat, setResultat] = useState(null);

  const handleDistanceCalculated = (newDistance) => {
    console.log("Distance calculée :", newDistance); // Débogage
    setDistance(newDistance); // Met à jour la distance
  };

  const handleValidation = () => {
    if (distance !== null && estimation !== "") {
      setResultat(
        <AnalyseEstimation
          distance={distance}
          estimation={parseFloat(estimation)}
        />
      );
    } else {
      alert(
        "Veuillez d'abord calculer la distance, puis entrer votre estimation."
      );
    }
  };

  return (
    <div className="lecon2-container">
      <h1>Leçon 2 : Calcul de la distance et estimation</h1>

      {/* Étape 1 : Carte */}
      <DistanceLecon2 onDistanceCalculated={handleDistanceCalculated} />

      {/* Étape 2 : Formulaire d'estimation */}
      {distance !== null && (
        <FormEstimation
          estimation={estimation}
          setEstimation={setEstimation}
          onValidate={handleValidation}
        />
      )}

      {/* Étape 3 : Résultat */}
      {resultat && <div className="resultat">{resultat}</div>}
    </div>
  );
};

export default Lecon2;
