import React, { useState } from "react";
import Entrainement2 from "../Entrainement/Entrainement2";
import DistanceLecon2 from "../DistanceLecon/DistanceLecon2";
import FormEstimation from "../FormEstimation/FormEstimation";
import AnalyseEstimation2 from "../AnalyseEstimation/AnalyseEstimation2";
import "./Lecon2.css";

const Lecon2 = () => {
  const [distance, setDistance] = useState(null);
  const [estimation, setEstimation] = useState("");
  const [resultat, setResultat] = useState(null);
  const [entrainementTermine, setEntrainementTermine] = useState(false);

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
    <div className="lecon-container">
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
