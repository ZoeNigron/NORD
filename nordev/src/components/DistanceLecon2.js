// Lecon2.js

import { useState } from "react";
import Carte from "./Carte"; // Affichage de la carte
import PositionUtilisateur from "./PositionUtilisateur"; // Récupérer la position actuelle de l'utilisateur
import PointSelectionne from "./PointSelectionne"; // Gérer le clic sur la carte et la sélection d'un point
import CalculDistance from "./CalculDistance"; // Composant pour calculer la distance entre deux points

const DistanceLecon2 = () => {
  const [positionActuelle, setPositionActuelle] = useState(null); // Position actuelle de l'utilisateur
  const [positionCliquee, setPositionCliquee] = useState(null); // Position du clic sur la carte

  return (
    <div>
      <h1>Leçon : Calculer la distance</h1>

      {/* Affichage de la carte avec ses composants enfants */}
      <Carte>
        <PositionUtilisateur onPositionFound={setPositionActuelle} />
        <PointSelectionne onPositionFound={setPositionCliquee} />
      </Carte>

      {/* Si les deux positions sont définies, calculer la distance */}
      {positionActuelle && positionCliquee && (
        <CalculDistance
          point1={[positionActuelle[0], positionActuelle[1]]} // Position actuelle
          point2={[positionCliquee[0], positionCliquee[1]]} // Position cliquée
        />
      )}
    </div>
  );
};

export default DistanceLecon2;
