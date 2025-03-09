import React, { useState } from "react";
import DistanceLecon1 from "../DistanceLecon/DistanceLecon1";
import "./Entrainement.css";

const Entrainement1 = () => {
  const [distance, setDistance] = useState(null);

  const gererDistanceCalculee = (nouvelleDistance) => {
    console.log("Distance calculée :", nouvelleDistance);
    setDistance(nouvelleDistance);
  };

  return (
    <div className="lecon-container">
      <h2>Entraînement</h2>
      <p>
      Commencez par vous entraîner avant de débuter la leçon. Cliquez sur le bouton "Démarrer" lorsque vous êtes prêt à marcher. Déplacez-vous sur quelques mètres, puis appuyez sur le bouton "Terminer". L'application vous indiquera la distance que vous avez parcourue. Répétez cette opération plusieurs fois en testant différentes distances. Lorsque vous vous sentez à l'aise, nous vous recommandons de changer d'environnement en marchant un peu, puis vous pourrez démarrer la leçon !
      </p>

      <DistanceLecon1 exercice={{}} onDistanceCalculee={gererDistanceCalculee} />

      {distance !== null && (
        <div className="resultat-container">
          <div className="resultat-titre">La distance que vous avez parcourue est de</div>
          <div className="resultat-valeur">{Math.round(distance)} mètres</div>
        </div>
      )}
    </div>
  );
};

export default Entrainement1;
