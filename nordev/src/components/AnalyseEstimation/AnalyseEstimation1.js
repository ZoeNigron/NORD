import React from "react";
import "./AnalyseEstimation.css";

function AnalyseEstimation1({ distance, estimation }) {
  const distanceArrondie = Math.round(distance); // estimation au mètre près
  const difference = Math.abs(distanceArrondie - estimation);

  let message = "";
  let messageClass = "";

  if (difference <= 5) {
    message = "🎯 Bravo ! Vous avez parcouru la bonne distance (à 5 mètres près).";
    messageClass = "message-correct";
  } else if (distanceArrondie > estimation) {
    message = "⬇️ Vous n'êtes pas allé assez loin !";
    messageClass = "message-incorrect";
  } else {
    message = "⬆️ Vous êtes allé trop loin !";
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

export default AnalyseEstimation1;
