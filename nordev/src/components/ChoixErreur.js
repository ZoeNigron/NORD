import React from "react";
//import "./ChoixErreur.css";

function ChoixErreur({ distance, onSelection }) {
  const distanceProportionnelle = distance * 2;

  return (
    <div className="choix-erreur">
      <p>Vous vous êtes trompé dans votre estimation ! Que pensez-vous avoir parcouru ?</p>
      <button onClick={() => onSelection(distance)}>{distance} mètres</button>
      <button onClick={() => onSelection(distanceProportionnelle)}>{distanceProportionnelle}mètres</button>
    </div>
  );
}

export default ChoixErreur;
