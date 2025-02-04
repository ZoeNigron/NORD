import React from "react";
import "./AnalyseEstimation.css";

function AnalyseEstimation2({ distance, estimation }) {
  const distanceArrondie = Math.round(distance); // estimation au mètre près
  const difference = Math.abs(distanceArrondie - estimation);

  let message = "";
  let messageClass = "";

  if (difference <= 5) {
    message = "🎯 Bravo ! Vous avez estimé la distance correctement (à 5 mètres près).";
    messageClass = "message-correct";
  } else if (distanceArrondie > estimation) {
    message = "⬇️ Votre estimation est trop courte !";
    messageClass = "message-incorrect";
  } else {
    message = "⬆️ Votre estimation est trop longue !";
    messageClass = "message-incorrect";
  }

  return (
    <div className="analyse-estimation">
      <p>
        <strong>Distance réelle :</strong> {distanceArrondie} mètres
      </p>
      <div className={`message ${messageClass}`}>
        {message}
      </div>
    </div>
  );
}

export default AnalyseEstimation2;
