// Ce composant analyse l'estimation que l'utilisateur entre dans le formulaire après avoir cliqué à deux endroits différents sur la carte dans la leçon 2 
// En entrée, le composant prend quatre props : une distance (int), une estimation (int), un compteur (int) et une fonction (refaireExercice)
// En sortie, on a un message d'erreur ou de validation affiché, un compteur d'exercices et un bouton pour refaire l'exercice

import React from "react";
import { CheckCircle, ArrowUpward, ArrowDownward } from "@mui/icons-material";
import "./AnalyseEstimation.css";

function AnalyseEstimation2({ distance, estimation, compteur, refaireExercice }) {
  const distanceArrondie = Math.round(distance); // estimation au mètre près
  const difference = Math.abs(distanceArrondie - estimation);

  let message = "";
  let messageClasse = "";
  let messageIcone = null;

  if (difference <= 5) {
    message = "Bravo ! Vous avez estimé la distance correctement (à 5 mètres près).";
    messageClasse = "message-correct";
    messageIcone = <CheckCircle className="icone-correcte" />;
  } else if (distanceArrondie > estimation) {
    message = "Votre estimation est trop courte !";
    messageClasse = "message-incorrect";
    messageIcone = <ArrowDownward className="icone-incorrecte" />;
  } else {
    message = "Votre estimation est trop longue !";
    messageClasse = "message-incorrect";
    messageIcone = <ArrowUpward className="icone-incorrecte" />;
  }

  return (
    <div className="analyse-estimation">
      <p>
        <strong>Distance réelle :</strong> {distanceArrondie} mètres
      </p>
      <div className={`${messageClasse}`}>
        {messageIcone} {message}
      </div>

      <div className="compteur-exercices">
        <p>Vous avez fait cet exercice {compteur} fois d'affilée.</p>
      </div>

      <button onClick={refaireExercice} className="bouton-refaire">
        Refaire l'exercice
      </button>
    </div>
  );
}

export default AnalyseEstimation2;
