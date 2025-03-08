import React, { useState } from "react";
import DistanceLecon2 from "../components/DistanceLecon/DistanceLecon2";
import FormEstimation from "../components/FormEstimation/FormEstimation";
import AnalyseEstimation2 from "../components/AnalyseEstimation/AnalyseEstimation2";

const Lecon2 = () => {
  const [distance, setDistance] = useState(null);
  const [estimation, setEstimation] = useState("");
  const [resultat, setResultat] = useState(null);

  const gererDistanceCalculee = (nouvelleDistance) => {
    console.log("Distance calculée :", nouvelleDistance);
    setDistance(nouvelleDistance);
  };

  const gererValidation = () => {
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
      <DistanceLecon2 distanceCalculee={gererDistanceCalculee} />

      {distance !== null && !resultat && (
        <FormEstimation
          estimation={estimation}
          setEstimation={setEstimation}
          gererValidation={gererValidation}
        />
      )}

      {resultat && <div className="resultat">{resultat}</div>}
    </div>
  );
};

export default Lecon2;
