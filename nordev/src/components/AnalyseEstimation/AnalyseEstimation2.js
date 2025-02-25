import React from "react";
import { CheckCircle, ArrowUpward, ArrowDownward } from "@mui/icons-material";
import "./AnalyseEstimation.css";

function AnalyseEstimation2({ distance, estimation }) {
  const distanceArrondie = Math.round(distance); // estimation au mètre près
  const difference = Math.abs(distanceArrondie - estimation);

  let message = "";
  let messageClasse = "";
  let messageIcone = null;

  if (difference <= 5) {
    message = "Bravo ! Vous avez estimé la distance correctement (à 5 mètres près).";
    messageClasse = "message-correct";
    messageIcone = <CheckCircle className="icon-correct" />;
  } else if (distanceArrondie > estimation) {
    message = "Votre estimation est trop courte !";
    messageClasse = "message-incorrect";
    messageIcone = <ArrowDownward className="icon-incorrect" />;
  } else {
    message = "Votre estimation est trop longue !";
    messageClasse = "message-incorrect";
    messageIcone = <ArrowUpward className="icon-incorrect" />;
  }

  return (
    <div className="analyse-estimation">
      <p>
        <strong>Distance réelle :</strong> {distanceArrondie} mètres
      </p>
      <div className={`message ${messageClasse}`}>
        {messageIcone} {message}
      </div>
    </div>
  );
}

export default AnalyseEstimation2;
