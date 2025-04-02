// Ce composant permet à l'utilisateur de sélectionner l'exercice qu'il souhaite faire dans la leçon 1. Les exercices se distinguent par la longueur de la distance cible à atteindre en se déplaçant.
// En entrée, il prend deux props : "exercices", représentant les différents exercices que l'on récupère de l'API, et "lorsSelection" (fonction) qui permet à l'utilisateur de sélectionner l'exercice
// En sortie, il renvoie les différents boutons cliquables des exercices

import React from "react";
import "./SelectionExercice.css";

function SelectionExercice({ exercices, lorsSelection }) {
  return (
    <div className="selection">
      <h2 className="titre-selection">Choisissez un exercice :</h2>
      {exercices.map((exercice) => (
        <button className="bouton-selection"
          key={exercice.id}
          onClick={() => lorsSelection(exercice)}
        >
          {exercice.nom}
        </button>
      ))}
    </div>
  );
}

export default SelectionExercice;
