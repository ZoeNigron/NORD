import React, { useState } from "react";
import { useParams } from "react-router-dom";
import lecons from "../services/lecons"; // Importez vos données ici
import FormEstimation from "../components/FormEstimation";
import Carte from "../components/Carte";
import AnalyseEstimation from "../components/AnalyseEstimation";
import utiliserGeolocalisation from "../services/utiliserGeolocalisation";
import utiliserTracking from "../services/utiliserTracking";
import BarreNavig from "../components/BarreNavig/BarreNavig";
import BoutonAction from "../components/BoutonAction";

const FaireLecon = () => {
  const { id } = useParams();
  const lecon = lecons.find((l) => l.id === parseInt(id)); // Trouver la leçon actuelle

  const { startCoords, setStartCoords, message, setMessage } =
    utiliserGeolocalisation();
  const {
    estimation,
    setEstimation,
    distanceCovered,
    toggleTracking,
    isTracking,
    isFinished,
  } = utiliserTracking(startCoords, setStartCoords, setMessage);

  const [isValidated, setIsValidated] = useState(false);

  if (!lecon) {
    return <p>Leçon introuvable.</p>; // Gérer les leçons non trouvées
  }

  if (!startCoords) {
    return <p>Chargement de votre position...</p>;
  }

  const handleValidation = () => {
    if (estimation > 0) {
      setMessage(""); // Réinitialise le message d'erreur
      setIsValidated(true);
    } else {
      setMessage("Veuillez entrer une estimation valide.");
    }
  };

  return (
    <div>
      <BarreNavig
        title="Mes compétences"
        backLink="/accueil"
        profileLink="/profil"
      />
      <h2>{lecon.titre}</h2>
      <p>{lecon.description}</p>
      <p>
        <strong>Objectif :</strong> {lecon.objectif}
      </p>

      {/* Formulaire d'estimation */}
      {!isValidated && (
        <FormEstimation
          estimation={estimation}
          setEstimation={setEstimation}
          isTracking={isTracking}
          toggleTracking={toggleTracking}
          onValidate={handleValidation}
        />
      )}

      {!isValidated && (
        <p>Veuillez entrer votre estimation de distance avant de commencer.</p>
      )}

      {/* Bouton Démarrer/Terminer */}
      {isValidated && (
        <BoutonAction
          onClick={toggleTracking}
          texte={isTracking ? "Terminer" : "Démarrer"}
        />
      )}

      {/* Analyse de l'estimation */}
      {isFinished && (
        <AnalyseEstimation distance={distanceCovered} estimation={estimation} />
      )}

      {/* Informations */}
      <div>
        <p>{message}</p>
      </div>

      {/* Carte */}
      {isValidated && <Carte startCoords={startCoords} />}
    </div>
  );
};

export default FaireLecon;