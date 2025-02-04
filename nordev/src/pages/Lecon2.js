import React, { useState } from "react";
import DistanceLecon2 from "../components/DistanceLecon2";
import FormEstimation from "../components/FormEstimation/FormEstimation";
import AnalyseEstimation2 from "../components/AnalyseEstimation/AnalyseEstimation2";

const Lecon2 = () => {
  const [distance, setDistance] = useState(null);
  const [estimation, setEstimation] = useState("");
  const [resultat, setResultat] = useState(null);

  const handleDistanceCalculee = (nouvelleDistance) => {
    console.log("Distance calculée :", nouvelleDistance);
    setDistance(nouvelleDistance);
  };

  const handleValidation = () => {
    if (distance !== null && estimation !== "") {
      setResultat(
        <AnalyseEstimation2
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
      <DistanceLecon2 distanceCalculee={handleDistanceCalculee} />

      {distance !== null && !resultat && (
        <FormEstimation
          estimation={estimation}
          setEstimation={setEstimation}
          onValidate={handleValidation}
        />
      )}

      {resultat && <div className="resultat">{resultat}</div>}
    </div>
  );
};

export default Lecon2;
