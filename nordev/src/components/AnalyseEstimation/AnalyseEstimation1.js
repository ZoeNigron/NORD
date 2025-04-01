// Ce composant analyse l'estimation que l'utilisateur entre dans le formulaire après avoir parcouru une certaine distance dans la leçon 1  
// En entrée, le composant prend deux props : une distance (int) et une estimation (int) 
// En sortie, on a un message d'erreur ou de validation affiché

import React, {useState} from "react";
import ChoixErreur from "../ChoixErreur";
import { CheckCircle, ArrowUpward, ArrowDownward, Cancel } from "@mui/icons-material";
import "./AnalyseEstimation.css";

function AnalyseEstimation1({ distance, estimation }) {
  const distanceArrondie = Math.round(distance); // estimation au mètre près
  const difference = Math.abs(distanceArrondie - estimation);

  const [choixErrone, setChoixErrone] = useState(null);
  const [estCorrect, setEstCorrect] = useState(null);

  let message = "";
  let messageClasse = "";
  let messageIcone = null;

  if (difference <= 5) {  // on vérifie si la différence est dans une marge d'erreur de 5 mètres
    message = "Bravo ! Vous avez parcouru la bonne distance (à 5 mètres près).";
    messageClasse = "message-correct";
    messageIcone = <CheckCircle className="icone-correcte" />;
  } else if (distanceArrondie > estimation) {
    message = "Vous êtes allé trop loin !";
    messageClasse = "message-incorrect";
    messageIcone = <ArrowUpward className="icone-incorrecte" />;
  } else {
    message = "Vous n'êtes pas allé assez loin !";
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
          <ChoixErreur // on appelle le composant permettant de gérer les erreurs d'estimation
            distance={distanceArrondie}
            selection={gererSelection} // fonction appelée lors de la sélection d'une nouvelle estimation
          />
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
    </div>
  );
}

export default AnalyseEstimation1;
