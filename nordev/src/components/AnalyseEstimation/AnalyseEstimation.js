// Ce composant analyse, soit l'estimation de la distance qu'a parcouru l'utilisateur dans la leçon 1, soit l'estimation que l'utilisateur a entré dans le formulaire après avoir cliqué à deux endroits différents sur la carte dans la leçon 2
// En entrée, le composant prend cinq props : une distance (int), une estimation (int), un compteur (int), une fonction (refaireExercice) et l'id de la leçon (int)
// En sortie, on a un message d'erreur ou de validation affiché, un compteur d'exercices et un bouton pour refaire l'exercice

import React, { useState } from "react";
import ChoixErreur from "../ChoixErreur";
import { CheckCircle, ArrowUpward, ArrowDownward, Cancel } from "@mui/icons-material";
import "./AnalyseEstimation.css";

function AnalyseEstimation({ distance, estimation, compteur, refaireExercice, leconId }) {
  const distanceArrondie = Math.round(distance); // estimation au mètre près
  const difference = Math.abs(distanceArrondie - estimation);

  const [choixErrone, setChoixErrone] = useState(null);
  const [estCorrect, setEstCorrect] = useState(null);

  let message = "";
  let messageClasse = "";
  let messageIcone = null;

  if (difference <= 5) { // on vérifie si la différence est dans une marge d'erreur de 5 mètres
    message = "Bravo ! Vous avez estimé la distance correctement (à 5 mètres près).";
    messageClasse = "message-correct";
    messageIcone = <CheckCircle className="icone-correcte" />;
  } else if (distanceArrondie > estimation) {
    message = leconId === 1 ? "Vous êtes allé trop loin !" : "Votre estimation est trop courte !";
    messageClasse = "message-incorrect";
    messageIcone = <ArrowUpward className="icone-incorrecte" />;
  } else {
    message = leconId === 1 ? "Vous n'êtes pas allé assez loin !" : "Votre estimation est trop longue !";
    messageClasse = "message-incorrect";
    messageIcone = <ArrowDownward className="icone-incorrecte" />;
  }

  const gererSelection = (distanceChoisie) => {
    setChoixErrone(distanceChoisie);
    setEstCorrect(distanceChoisie === distanceArrondie);
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
          {leconId === 1 && (
            <ChoixErreur // on appelle le composant permettant de gérer les erreurs d'estimation
              distance={distanceArrondie}
              selection={gererSelection} // fonction appelée lors de la sélection d'une nouvelle estimation
            />
          )}
        </>
      )}

      {choixErrone !== null && (
        <div className="choix-resultat">
          <p>Vous avez sélectionné : {choixErrone} mètres</p>
          {estCorrect ? (
            <p className="message-correct">
              <CheckCircle className="icone-correcte" /> Bravo ! Vous avez choisi la bonne distance.
            </p>
          ) : (
            <p className="message-incorrect">
              <Cancel className="icone-incorrecte" /> Mauvaise réponse. La bonne distance était : {distanceArrondie} mètres.
            </p>
          )}
        </div>
      )}

      <div className="compteur-exercices">
        <p>Vous avez fait cette leçon {compteur} fois d'affilée.</p>
      </div>

      <button onClick={refaireExercice} className="bouton-refaire">
        Refaire la leçon
      </button>
    </div>
  );
}

export default AnalyseEstimation;
