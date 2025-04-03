// Ce composant permet à l'utilisateur de choisir une nouvelle estimation en cas d'erreur
// En entrée, le composant prend deux propos : distance (int) et selection (fonction), et en sortie, on a un affichage de boutons proposant des distances alternatives 

import React from "react";

function ChoixErreur({ distance, selection }) {
  const distanceDoublee = distance * 2; // on double la distance pour proposer une distance alternative

  return (
    <div className="choix-erreur">
      <p>Vous vous êtes trompé dans votre estimation ! Que pensez-vous avoir parcouru ?</p>
      <button onClick={() => selection(distance)}>{distance} mètres</button> {/* bouton avec la distance réelle */}
      <button onClick={() => selection(distanceDoublee)}>{distanceDoublee} mètres</button> {/* bouton avec la distance doublée */}
    </div>
  );
}

export default ChoixErreur;
