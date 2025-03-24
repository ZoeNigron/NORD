import React, { useState, useEffect } from "react";
import ChoixErreur from "../ChoixErreur";
import { CheckCircle, ArrowUpward, ArrowDownward, Cancel } from "@mui/icons-material";
import "./AnalyseEstimation.css";

function AnalyseEstimation1({ distance, estimation }) {
  const distanceArrondie = Math.round(distance); // estimation au mètre près
  const difference = Math.abs(distanceArrondie - estimation);

  const [choixErrone, setChoixErrone] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [sequenceCorrecte, setSequenceCorrecte] = useState(0);
  const [score, setScore] = useState(0);

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

  useEffect(() => {
    if (difference <= 5) {
      setSequenceCorrecte((prevSequence) => {
        const nouvelleSequence = prevSequence + 1;
        if (nouvelleSequence >= 5) {
          setScore((prevScore) => prevScore + 10); 
          return 0; // Réinitialiser la séquence après 5 réussites
        }
        return nouvelleSequence;
      });
    } else {
      setSequenceCorrecte(0); // Réinitialisation en cas d'erreur
    }
  }, [difference]);


  // Afficher le nombre de réussites restantes avant le bonus
  const reussitesRestantes = 5 - sequenceCorrecte;

  return (
    <div className="analyse-estimation">
      {messageClasse === "message-correct" ? (
        <>
          <p>
            <strong>Distance réelle :</strong> {distanceArrondie} mètres
          </p>
          <div className={`message ${messageClasse}`}>
            {messageIcone} {message}
          </div>
        </>
      ) : (
        <>
          <div className={`message ${messageClasse}`}>
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

      <div className="score">
        <p>Votre score : {score}</p>
        {sequenceCorrecte > 0 && (
          <p>Il vous reste {reussitesRestantes} réussite(s) avant un bonus de score !</p>
        )}
      </div>
    </div>
  );
}

export default AnalyseEstimation1;
