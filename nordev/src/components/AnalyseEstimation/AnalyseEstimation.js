// Ce composant analyse si l'utilisateur a réussi la leçon ou non. Pour la leçon 1 et quand l'utilisateur n'a pas réussi, ce composant appelle le composant "Choix Erreur" pour laisser l'utilisateur estimer de combien de mètres il pense s'être trompé. Ce composant permet aussi de compter le nombre de fois d'affilée que l'utilisateur a réussi la leçon, de valider la leçon est enfin de la refaire
// En entrée, il prend cinq props : distance (int), estimation (int) qui est la valeur a comparer avec la valeur réelle de distance, refaireExercice (fonction), leconId (int) et tentativesReussies (int) qui permet de valider la leçon après 5 réussites
// En sortie, il affiche la distance réelle, l'indication de réussite ou non, le choix d'estimation d'erreur pour la leçon 1 avec sa correction, le nombre de tentatives réussies d'affilée, et enfin le bouton pour refaire la leçon ou bien revenir au menu des leçons quand la leçon est validée

import React, { useState, useEffect } from "react";
import ChoixErreur from "../ChoixErreur";
import {
  CheckCircle,
  ArrowUpward,
  ArrowDownward,
  Cancel,
} from "@mui/icons-material";
import "./AnalyseEstimation.css";
import { useNavigate } from "react-router-dom";
import { mettreAJourLeconsValidees } from "../../services/api";

function AnalyseEstimation({
  distance,
  estimation,
  refaireExercice,
  leconId,
  tentativesReussies,
}) {
  const navigate = useNavigate();

  const distanceArrondie = Math.round(distance); // estimation au mètre près
  const difference = Math.abs(distanceArrondie - estimation);

  const [choixErrone, setChoixErrone] = useState(null);
  const [estCorrect, setEstCorrect] = useState(null);

  useEffect(() => {
    if (tentativesReussies >= 1) { // si le nombre de réussites d'affilée dépasse 5
      const validerLecon = async () => {
        try {
          const utilisateurId = localStorage.getItem("idUtilisateur"); // on récupère l'id de l'utilisateur qui est stocké dans le localStorage
          if (!utilisateurId) {
            console.error("Aucun utilisateur trouvé.");
            return;
          }
          await mettreAJourLeconsValidees(utilisateurId, leconId); // on envoie à l'API quand la leçon est validée
          console.log(
            `Leçon ${leconId} validée pour l'utilisateur ${utilisateurId}`
          );
        } catch (error) {
          console.error("Erreur lors de la validation de la leçon :", error);
        }
      };
      validerLecon();
    }
  }, [tentativesReussies, leconId]);

  let message = "";
  let messageClasse = "";
  let messageIcone = null;

  if (difference <= 5) { // si l'utilisateur a réussi l'exercice à 5 mètres près
    message =
      "Bravo ! Vous avez estimé la distance correctement (à 5 mètres près).";
    messageClasse = "message-correct";
    messageIcone = <CheckCircle className="icone-correcte" />;
  } else if (distanceArrondie > estimation) { // si la distance est supérieure à l'objectif (leçon 1) ou à l'estimation de l'utilisateur (leçon 2), on affiche le message correspondant à la bonne leçon
    message =
      leconId === 1
        ? "Vous êtes allé trop loin !"
        : "Votre estimation est trop courte !";
    messageClasse = "message-incorrect";
    messageIcone = <ArrowUpward className="icone-incorrecte" />;
  } else {
    message =
      leconId === 1
        ? "Vous n'êtes pas allé assez loin !"
        : "Votre estimation est trop longue !";
    messageClasse = "message-incorrect";
    messageIcone = <ArrowDownward className="icone-incorrecte" />;
  }

  const gererSelection = (distanceChoisie) => { // pour gérer la sélection lors du choix d'erreur pour la leçon 1
    setChoixErrone(distanceChoisie);
    setEstCorrect(distanceChoisie === distanceArrondie);
  };

  return (
    <div className="analyse-estimation">
      <p>
        <strong>Distance réelle :</strong> {distanceArrondie} mètres
      </p>

      <div className={`${messageClasse}`}>
        {messageIcone} {message}
      </div>

      {leconId === 1 && difference > 5 && (
        <ChoixErreur distance={distanceArrondie} selection={gererSelection} />
      )}

      {choixErrone !== null && (
        <div className="choix-resultat">
          <p>Vous avez sélectionné : {choixErrone} mètres</p>
          {estCorrect ? (
            <p className="message-correct">
              <CheckCircle className="icone-correcte" /> Bravo ! Vous avez
              choisi la bonne distance.
            </p>
          ) : (
            <p className="message-incorrect">
              <Cancel className="icone-incorrecte" /> Mauvaise réponse. La bonne
              distance était : {distanceArrondie} mètres.
            </p>
          )}
        </div>
      )}

      <div className="compteur-exercices">
        <p>Vous avez réussi {tentativesReussies} fois d'affilée.</p>
      </div>

      {tentativesReussies >= 1 ? (
        <button
          onClick={() => navigate("/menu-lecons")}
          className="bouton-menu-lecon"
        >
          Leçon validée ! Retour au menu des leçons
        </button>
      ) : (
        <button onClick={refaireExercice} className="bouton-refaire">
          Refaire l'exercice
        </button>
      )}
    </div>
  );
}

export default AnalyseEstimation;
