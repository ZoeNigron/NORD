import React from "react";

function ChoixErreur({ distance, gererSelection }) {
  const distanceProportionnelle = distance * 2;

  return (
    <div className="choix-erreur">
      <p>Vous vous êtes trompé dans votre estimation ! Que pensez-vous avoir parcouru ?</p>
      <button onClick={() => gererSelection(distance)}>{distance} mètres</button>
      <button onClick={() => gererSelection(distanceProportionnelle)}>{distanceProportionnelle}mètres</button>
    </div>
  );
}

export default ChoixErreur;
