import React, { useState} from "react";
import ChoixErreur from "../ChoixErreur";
import { CheckCircle, ArrowUpward, ArrowDownward, Cancel } from "@mui/icons-material";
import "./AnalyseEstimation.css";

function AnalyseEstimation1({ distance, estimation }) {
  const distanceArrondie = Math.round(distance); // estimation au mètre près
  const difference = Math.abs(distanceArrondie - estimation);

  const [choixErrone, setChoixErrone] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  let message = "";
  let messageClasse = "";
  let messageIcone = null;

  // Vérifier si la différence est dans la marge d'erreur de 5 mètres
  if (difference <= 5) {
    message = "Bravo ! Vous avez parcouru la bonne distance (à 5 mètres près).";
    messageClasse = "message-correct";
    messageIcone = <CheckCircle className="icon-correct" />;
  } else if (distanceArrondie > estimation) {
    message = "Vous êtes allé trop loin !";
    messageClasse = "message-incorrect";
    messageIcone = <ArrowUpward className="icon-incorrect" />;
  } else {
    message = "Vous n'êtes pas allé assez loin !";
    messageClasse = "message-incorrect";
    messageIcone = <ArrowDownward className="icon-incorrect" />;
  }

  const gererSelection = (distanceChoisie) => {
    setChoixErrone(distanceChoisie);
    setIsCorrect(distanceChoisie === distanceArrondie);
  };

  return (
    <div className="analyse-estimation">
      {messageClasse === "message-correct" ? (
        <>
          <p>
            <strong>Distance réelle :</strong> {distanceArrondie} mètres
          </p>
          <div className={`${messageClasse}`}>
            {messageIcone} {message}
          </div>
        </>
      ) : (
        <>
          <div className={`${messageClasse}`}>
            {messageIcone} {message}
          </div>
          <ChoixErreur
            distance={distanceArrondie}
            estimation={estimation}
            onSelection={gererSelection}
          />
        </>
      )}

      {choixErrone !== null && (
        <div className="choix-resultat">
          <p>Vous avez sélectionné : {choixErrone} mètres</p>
          {isCorrect ? (
            <p className="message-correct">
              <CheckCircle className="icon-correct" /> Bravo ! Vous avez choisi la bonne distance.
            </p>
          ) : (
            <p className="message-incorrect">
              <Cancel className="icon-incorrect" /> Mauvaise réponse. La bonne distance était : {distanceArrondie} mètres.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default AnalyseEstimation1;
