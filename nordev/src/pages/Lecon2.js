import React, { useState } from "react";
import DistanceLecon2 from "../components/DistanceLecon2";
import FormEstimation from "../components/FormEstimation/FormEstimation";
import AnalyseEstimation from "../components/AnalyseEstimation/AnalyseEstimation";

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
      <DistanceLecon2 distanceCalculee={handleDistanceCalculee} />

      {distance !== null && (
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
