import React from "react";
import "./AnalyseEstimation.css";

function AnalyseEstimation({ distance, estimation }) {
  const distanceArrondie = Math.floor(distance / 5) * 5; // estimation à 5 mètres près
  const difference = Math.abs(distanceArrondie - estimation);

  let message = "";
  let messageClass = "";

  if (difference <= 10) {
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

export default AnalyseEstimation;
