import React, { useState, useEffect } from "react";
import { obtenirScore, mettreAJourScore } from "../services/api";

const GestionScore = ({ tentativesReussies }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const chargerScore = async () => {
      const scoreActuel = await obtenirScore();
      setScore(scoreActuel > 0 ? scoreActuel : 0); // Affiche 0 tant que < 10
    };
    chargerScore();
  }, []);

  useEffect(() => {
    if (tentativesReussies === 5) {
      const nouveauScore = Math.min(score + 10, 100); // Augmente de 10% max 100%
      setScore(nouveauScore);
      mettreAJourScore(nouveauScore);
    }
  }, [tentativesReussies]);

  return (
    <div className="gestion-score">
      <p>Réussissez la leçon 5 fois d'affilée pour la valider !</p>
    </div>
  );
};

export default GestionScore;
