import React, { useEffect, useState } from 'react';
import { obtenirTopScores } from './api';

function TopScores() {
  const [topScores, setTopScores] = useState([]);

  useEffect(() => {
    const fetchTopScores = async () => {
      try {
        const scores = await obtenirTopScores();
        setTopScores(scores);
      } catch (error) {
        console.error('Erreur lors de la récupération des scores', error);
      }
    };
    fetchTopScores();
  }, []);

  return (
    <div>
      <h2>Top Scores</h2>
      <ul>
        {topScores.map((utilisateur) => (
          <li key={utilisateur.id}>
            {utilisateur.nom} {utilisateur.prenom}: {utilisateur.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopScores;
