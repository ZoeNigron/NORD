import React, { useState } from 'react';
import { Button } from '@mui/material';
import { mettreAJourScore } from './api';

function ScoreManagement({ userId, score }) {
  const [currentScore, setCurrentScore] = useState(score);

  const handleUpdateScore = async () => {
    try {
      const response = await mettreAJourScore(userId, currentScore);
      if (response) {
        console.log('Score mis à jour avec succès', response);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du score', error);
    }
  };

  return (
    <div>
      <h2>Score actuel : {currentScore}</h2>
      <Button onClick={handleUpdateScore}>Mettre à jour le score</Button>
    </div>
  );
}

export default ScoreManagement;
