import React, { useState } from "react";
import "./AnalyseEstimation.css";
import ChoixErreur from "../ChoixErreur";

function AnalyseEstimation1({ distance, estimation }) {
  const distanceArrondie = Math.round(distance); // estimation au mètre près
  const difference = Math.abs(distanceArrondie - estimation);

  const [choixErrone, setChoixErrone] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  let message = "";
  let messageClass = "";

  if (difference <= 5) {
    message = "🎯 Bravo ! Vous avez parcouru la bonne distance (à 5 mètres près).";
    messageClass = "message-correct";
  } else if (distanceArrondie > estimation) {
    message = "⬆️ Vous êtes allé trop loin !";
    messageClass = "message-incorrect";
  } else {
    message = "⬇️ Vous n'êtes pas allé assez loin !";
    messageClass = "message-incorrect";
  }

  const handleSelection = (distanceChoisie) => {
    setChoixErrone(distanceChoisie);
    if (distanceChoisie === distanceArrondie) {
      setIsCorrect(true); // Si la sélection est correcte
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="analyse-estimation">
      {messageClass === "message-correct" ? (
        <>
          <p>
            <strong>Distance réelle :</strong> {distanceArrondie} mètres
          </p>
          <div className={`message ${messageClass}`}>
            {message}
          </div>
        </>
      ) : (
        <>
          <div className={`message ${messageClass}`}>
            {message}
          </div>
          <ChoixErreur
            distance={distanceArrondie}
            estimation={estimation}
            onSelection={handleSelection}
          />
        </>
      )}

      {choixErrone !== null && (
        <div className="choix-resultat">
          <p>Vous avez sélectionné : {choixErrone} mètres</p>
          {isCorrect === true ? (
            <p className="message-correct">✅ Bravo ! Vous avez choisi la bonne distance.</p>
          ) : (
            <p className="message-incorrect">
              ❌ Mauvaise réponse. La bonne distance était : {distanceArrondie} mètres.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default AnalyseEstimation1;
