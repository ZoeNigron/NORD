import React from "react";
import "./SelectionExercice.css";

function SelectionExercice({ exercices, onSelect }) {
  return (
    <div className="selection-container">
      <h2 className="selection-title">Choisissez un exercice :</h2>
      {exercices.map((exercice) => (
        <button
          key={exercice.id}
          onClick={() => onSelect(exercice)}
          className="selection-button"
        >
          {exercice.nom}
        </button>
      ))}
    </div>
  );
}

export default SelectionExercice;
