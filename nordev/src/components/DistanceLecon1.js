import React, { useState } from "react";
import Carte from "./Carte"; // Affichage de la carte
import PositionUtilisateur from "./PositionUtilisateur"; // Récupérer la position actuelle de l'utilisateur
import CalculDistance from "./CalculDistance"; // Composant pour calculer la distance entre deux points
import BoutonAction from "./BoutonAction"; // Bouton pour démarrer et terminer

const DistanceLecon1 = () => {
  const [positionDepart, setPositionDepart] = useState(null); // Position de départ
  const [positionArrivee, setPositionArrivee] = useState(null); // Position d'arrivée
  const [phase, setPhase] = useState("start"); // Phase pour savoir si on est en train de commencer ou de finir

  // Fonction qui gère la position de départ au démarrage
  const handleStart = (coords) => {
    setPositionDepart(coords); // Enregistrer la position de départ
    console.log("Position de départ:", coords);
    setPhase("end"); // Passer à la phase de fin
  };

  // Fonction qui gère la position d'arrivée à la fin
  const handleEnd = (coords) => {
    setPositionArrivee(coords); // Enregistrer la position d'arrivée
    console.log("Position d'arrivée:", coords);
    setPhase("done"); // Passer à la phase de fin (distance calculée)
  };

  return (
    <div>
      <h1>Leçon : Calculer la distance</h1>

      <Carte>
        {/* Affichage du bouton Démarrer / Terminer */}
        <BoutonAction
          texte={phase === "start" ? "Démarrer" : "Terminer"}
          onClick={() =>
            phase === "start"
              ? handleStart() // Démarrer et enregistrer la position de départ
              : handleEnd() // Terminer et enregistrer la position d'arrivée
          }
        />
        {/* Position de l'utilisateur */}
        <PositionUtilisateur onPositionFound={phase === "start" ? handleStart : handleEnd} />
      </Carte>

      {/* Si les deux positions sont définies, calculer la distance */}
      {positionDepart && positionArrivee && (
        <CalculDistance
          point1={[positionDepart[0], positionDepart[1]]} // Position de départ
          point2={[positionArrivee[0], positionArrivee[1]]} // Position d'arrivée
        />
      )}

      {phase === "done" && (
        <p>Distance calculée entre la position de départ et d'arrivée !</p>
      )}
    </div>
  );
};

export default DistanceLecon1;
