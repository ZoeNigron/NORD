import React, { useState, useEffect } from "react";
import { obtenirScore, mettreAJourScore } from "../api";

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
      <h3>Score d'apprentissage : {score >= 10 ? `${score}%` : "0%"}</h3>
      <p>Gagnez 5 fois d'affilée pour augmenter votre score de 10%.</p>
    </div>
  );
};

export default GestionScore;
