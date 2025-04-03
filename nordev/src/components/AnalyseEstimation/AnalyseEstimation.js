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
import { mettreAJourLeconsValidees } from "../../services/api"; // Import de la fonction API

function AnalyseEstimation({
  distance,
  estimation,
  compteur,
  refaireExercice,
  leconId,
  tentativesReussies,
  userId, // Ajout du userId en prop
}) {

  const navigate = useNavigate();
  
  const distanceArrondie = Math.round(distance); // estimation au mètre près
  const difference = Math.abs(distanceArrondie - estimation);

  const [choixErrone, setChoixErrone] = useState(null);
  const [estCorrect, setEstCorrect] = useState(null);

  // Envoi à l'API quand la leçon est validée
  useEffect(() => {
    if (tentativesReussies >= 5) {
      const validerLecon = async () => {
        try {
          await mettreAJourLeconsValidees(userId, leconId);
          console.log(`Leçon ${leconId} validée pour l'utilisateur ${userId}`);
        } catch (error) {
          console.error("Erreur lors de la validation de la leçon :", error);
        }
      };
      validerLecon();
    }
  }, [tentativesReussies, userId, leconId]);

  let message = "";
  let messageClasse = "";
  let messageIcone = null;

  if (difference <= 5) {
    message =
      "Bravo ! Vous avez estimé la distance correctement (à 5 mètres près).";
    messageClasse = "message-correct";
    messageIcone = <CheckCircle className="icone-correcte" />;
  } else if (distanceArrondie > estimation) {
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
            <ChoixErreur
              distance={distanceArrondie}
              selection={gererSelection}
            />
          )}
        </>
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

      {tentativesReussies >= 5 ? (
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
